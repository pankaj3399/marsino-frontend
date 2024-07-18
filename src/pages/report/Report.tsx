import React, { useEffect, useRef, useState } from "react";
import BreadCrumb from "../../components/partial/BreadCrumb";
import { BREADCRUMB_DATA } from "../../utils/data";
import Table from "../../components/Table/Table";
import Button from "../../components/partial/Button";
import { CommonApi } from "../../services/CommonAPI";
import { ReportType } from "../../interfaces";
import { FaRegFilePdf } from "react-icons/fa";
import { Tooltip } from "antd";
import { useReactToPrint } from "react-to-print";
import { PDFDocument, rgb } from 'pdf-lib';

type Props = {};

const Reports = (props: Props) => {
    const [data, setData] = useState<ReportType[]>([]);

    const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);

    let pageHeigth = 842;
    let pageWidth = 595;
    async function createPdfWithEditableFields(selReport:any) {
        const pdfDoc = await PDFDocument.create();

        //   Add A4 sheet
        const page = pdfDoc.addPage([595, 842]);
        const form = pdfDoc.getForm();

        // Helper function to add text fields
        const addTextField = (name: any, x: any, y: any, width: any, height: any, value: any) => {
            const textField = form.createTextField(name);
            textField.setText(value);
            // textField.setMaxLength(1);  // Set max length to 1
            textField.addToPage(page, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(1, 0, 0), borderWidth: 1 });
        };

        // Adding fields with values from the selectedReport
        let carInsuranceId = selReport?.car_insurance_id || "";
            addTextField('Car Insurance ID', 20, 260, 16*29, 16, carInsuranceId|| '');
        page.drawText('Pflegeversichertennummer (ggf. entspricht diese der Krankenversichertennummer)', {
            x: 20,
            y: pageHeigth - 272,
            size: 12,
            color: rgb(0, 0, 0),
        });


        let lastName = selReport?.last_name || "";
        addTextField('Last Name', 20, 316, 16*29, 16, lastName || '');
        page.drawText('Name', {
            x: 20,
            y: pageHeigth - 332,
            size: 12,
            color: rgb(0, 0, 0),
        });

        let firstName = selReport?.first_name || "";
        addTextField('First Name', 20, 380, 16*29, 16, firstName || '');
        page.drawText('Vorname', {
            x: 20,
            y: pageHeigth - 392,
            size: 12,
            color: rgb(0, 0, 0),
        });

        let dob = selReport?.dob || "";
            addTextField('Date of Birth', 20, 440, 16*10, 16, dob || '');
        page.drawText('Geburtsdatum', {
            x: 20,
            y: pageHeigth - 452,
            size: 12,
            color: rgb(0, 0, 0),
        });

        let street = selReport?.street || "";
        addTextField('Street', 20, 500, 16*29, 16, street || '');
        page.drawText('Straße', {
            x: 20,
            y: pageHeigth - 512,
            size: 12,
            color: rgb(0, 0, 0),
        });

        let postalCode = selReport?.postal_code || "";
        addTextField('Postal Code', 20, 560, 16*5, 16, postalCode || '');
        page.drawText('PLZ', {
            x: 20,
            y: pageHeigth - 572,
            size: 12,
            color: rgb(0, 0, 0),
        });

        let city = selReport?.city || "";
        addTextField('City', 16 + 100, 560, 16*23, 16, city || '');
        page.drawText('Ort', {
            x: 16 + 100,
            y: pageHeigth - 572,
            size: 12,
            color: rgb(0, 0, 0),
        });
        page.drawText('Nachweis über einen Beratungsbesuch nach § 37 Abs. 3 SGB XI', {
            x: 20,
            y: pageHeigth - 150,
            size: 12,
            color: rgb(0, 0, 0),
        });

        page.drawText('Angaben zur pflegebedürftigen Person:', {
            x: 20,
            y: pageHeigth - 180,
            size: 12,
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'editable_form.pdf';
        a.click();
    }

    const componentRef = useRef<any>();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const getData = async () => {
        try {
            const res = await CommonApi.GetReports({
                status: "applied",
            });
            if (res.success) {
                console.log(res.reports);
                setData(res.reports);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const columns = [
        {
            title: "Car Insurance ID",
            dataIndex: "car_insurance_id",
            key: "car_insurance_id",
        },
        {
            title: "Last name",
            dataIndex: "last_name",
            key: "last_name",
        },
        {
            title: "First name",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Date of Birth",
            dataIndex: "dob",
            key: "dob",
            render: (dob: any) => {
                return (
                    <div>
                        {dob.split("T")[0]}
                    </div>
                );
            },
        },
        {
            title: "Street",
            dataIndex: "street",
            key: "street",
        },
        {
            title: "City",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "Postal Code",
            dataIndex: "postal_code",
            key: "postal_code",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_: any, val: any) => {
                return (
                    <div className="flex gap-1 items-center">
                        <Tooltip title="Generate PDF">
                            <>
                                <Button
                                    state="primary"
                                    onClick={() => {
                                        setSelectedReport(() => {
                                            return val;
                                        });
                                        setTimeout(() => {
                                            createPdfWithEditableFields(val);
                                        }, 1000)
                                    }}
                                >
                                    <FaRegFilePdf />
                                </Button>
                            </>
                        </Tooltip>
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h4 className="text-2xl">REPORTS</h4>
            <BreadCrumb items={BREADCRUMB_DATA.REPORTS} />

            <div className="mt-6">
                <Table columns={columns} dataSource={data} />
            </div>
            <div className="hidden">
                <div className="p-10" ref={componentRef}>
                    {
                        selectedReport ?
                            <div>
                                <h4 className="text-center font-bold">
                                    Nachweis über einen Beratungsbesuch nach § 37 Abs. 3 SGB XI
                                </h4>
                                <p className="mt-10 font-bold">Angaben zur pflegebedürftigen Person:</p>
                                <div className="flex flex-col mt-5 gap-5">
                                    <div>
                                        <div className="flex items-center">
                                            {
                                                // Create Empty boxes of length 10
                                                Array.from({ length: 16 }).map((_, index) => (
                                                    <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                        {
                                                            selectedReport?.car_insurance_id[index]
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <h5>
                                            Pflegeversichertennummer (ggf. entspricht diese der Krankenversichertennummer)
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            {
                                                // Create Empty boxes of length 10
                                                Array.from({ length: 29 }).map((_, index) => (
                                                    <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                        {
                                                            selectedReport?.last_name[index]
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <h5>
                                            Name
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            {
                                                // Create Empty boxes of length 10
                                                Array.from({ length: 29 }).map((_, index) => (
                                                    // <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                    //     {
                                                    //         selectedReport?.first_name[index]
                                                    //     }
                                                    // </div>
                                                    <input
                                                        type="text"
                                                        className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center"
                                                        value={selectedReport?.first_name[index]}
                                                    />
                                                ))
                                            }
                                        </div>
                                        <h5>
                                            Vorname
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            {
                                                // Create Empty boxes of length 10
                                                Array.from({ length: 8 }).map((_, index) => (
                                                    <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                        {
                                                            selectedReport?.dob[index]
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <h5>
                                            Geburtsdatum
                                        </h5>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            {
                                                // Create Empty boxes of length 10
                                                Array.from({ length: 29 }).map((_, index) => (
                                                    <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                        {
                                                            selectedReport?.street[index]
                                                        }
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <h5>
                                            Straße
                                        </h5>
                                    </div>
                                    <div className="flex items-center gap-5">

                                        <div>
                                            <div className="flex items-center">
                                                {
                                                    // Create Empty boxes of length 10
                                                    Array.from({ length: 5 }).map((_, index) => (
                                                        <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                            {
                                                                selectedReport?.postal_code[index]
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <h5>
                                                PLZ
                                            </h5>
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                {
                                                    // Create Empty boxes of length 10
                                                    Array.from({ length: 23 }).map((_, index) => (
                                                        <div key={index} className="h-5 w-5 border text-sm border-red-500 flex items-center justify-center">
                                                            {
                                                                selectedReport?.city[index]
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <h5>
                                                Ort
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>
        </div>
    );
};

export default Reports;
