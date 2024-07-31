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
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import moment from "moment";
import logo from "../../assets/images/logo.jpeg";

type Props = {};

const Reports = (props: Props) => {
    const [data, setData] = useState<ReportType[]>([]);

    const [selectedReport, setSelectedReport] = useState<ReportType | null>(null);

    let pageHeigth = 842;
    let pageWidth = 595;
    async function createPdfWithEditableFields(selReport: any) {
        const pdfDoc = await PDFDocument.create();

        //   Add A4 sheet
        const page = pdfDoc.addPage([595, 842]);
        const form = pdfDoc.getForm();

        const logoImageBytes = await fetch(logo).then(res => res.arrayBuffer());
        const logoImage = await pdfDoc.embedJpg(logoImageBytes);

        const pageWidth = page.getWidth();
        const logoWidth = 150; // Adjust as necessary
        const logoHeight = 50; // Adjust as necessary

        const xPosition = pageWidth - logoWidth - 20;

        page.drawImage(logoImage, {
            x: xPosition,
            y: page.getHeight() - logoHeight - 10, // Adjust position from top as necessary
            width: logoWidth,
            height: logoHeight,
        });
        // Embed the bold font
        const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        const text = 'Nachweis über einen Beratungsbesuch nach § 37 Abs. 3 SGB XI';
        const fontSize = 10;
        const textWidth = boldFont.widthOfTextAtSize(text, fontSize);

        const textX = (pageWidth - textWidth) / 2;

        // Helper function to add text fields
        const addTextField = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 84; // Set your desired character limit here

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit22 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 22; // Set character limit to 22

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit60 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 73; // Set character limit to 58

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit26 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 26; // Set character limit to 21

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };


        const addTextFieldWithLimit9 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 9; // Set character limit to 9

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit14 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 14; // Set character limit to 14

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit18 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 18; // Set character limit to 18

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit13 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 13; // Set character limit to 18

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit52 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 69; // Set character limit to 18

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextFieldWithLimit44 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 41; // Set character limit to 18

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextArea = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 644;

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });
            textField.enableMultiline();
            textField.setFontSize(10);

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };

        const addTextAreaWithLimit89 = (name: any, x: any, y: any, width: any, height: any, value: any, p = page) => {
            const textField = form.createTextField(name);

            // Set a fixed character limit
            const charLimit = 88; // Set character limit to 120

            // Truncate the value to fit within the character limit
            const truncatedValue = value.length > charLimit ? value.slice(0, charLimit) : value;

            // Set the text and add the field to the page
            textField.setText(truncatedValue);
            textField.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });
            textField.enableMultiline();
            textField.setFontSize(10);

            // Enforce the character limit by setting the max length
            textField.setMaxLength(charLimit);
        };







        // page.drawText('Nachweis über einen Beratungsbesuch nach § 37 Abs. 3 SGB XI', {
        //     x: (pageWidth - logoWidth) / 2,
        //     y: page.getHeight() - logoHeight - 10, // Position below the logo
        //     size: 10,
        //     color: rgb(0, 0, 0),
        // });

        // page.drawText('Angaben zur pflegebedürftigen Person:', {
        //     x: 20,
        //     y: pageHeigth - 110,
        //     size: 10,
        //     color: rgb(0, 0, 0),
        // });

        const addCheckBox = (name: any, x: any, y: any, width: any, height: any, p: any = page) => {
            const checkBox = form.createCheckBox(name);
            checkBox.addToPage(p, { x: x, y: pageHeigth - y, width, height, borderColor: rgb(0, 0, 0), borderWidth: 1 });
        }

        page.drawText(text, {
            x: 70,
            y: pageHeigth - 80, // Adjust position to avoid overlap with logo
            size: 14,
            font: boldFont,
            color: rgb(0, 0, 0),
        });
        page.drawText('Angaben zur pflegebedürftigen Person:', {
            x: 40,
            y: pageHeigth - 110,
            size: 10,
            color: rgb(0, 0, 0),
            font: boldFont
        });

        // Adding fields with values from the selectedReport
        let carInsuranceId = selReport?.car_insurance_id || "";
        addTextField('Car Insurance ID', 40, 138, pageWidth - 80, 16, carInsuranceId || '');
        page.drawText('Pflegeversichertennummer (ggf. entspricht diese der Krankenversichertennummer)', {
            x: 40,
            y: pageHeigth - 152,
            size: 10,
            color: rgb(0, 0, 0),
        });

        // Add a dummy checkbox
        // addRadioButton('checkbox', 20, 630, 16, 16, false);



        let lastName = selReport?.last_name || "";
        addTextField('Last Name', 40, 180, pageWidth - 80, 16, lastName || '');
        page.drawText('Name', {
            x: 40,
            y: pageHeigth - 194,
            size: 10,
            color: rgb(0, 0, 0),
        });

        let firstName = selReport?.first_name || "";
        addTextField('First Name', 40, 220, pageWidth - 80, 16, firstName || '');
        page.drawText('Vorname', {
            x: 40,
            y: pageHeigth - 234,
            size: 10,
            color: rgb(0, 0, 0),
        });

        let dob = selReport?.dob || "";
        if (dob) {
            dob = moment(dob).format("DD-MM-YYYY")
        }
        addTextFieldWithLimit22('Date of Birth', 40, 260, 140, 16, dob || '');
        page.drawText('Geburtsdatum', {
            x: 40,
            y: pageHeigth - 274,
            size: 10,
            color: rgb(0, 0, 0),
        });

        let street = selReport?.street || "";
        addTextField('Street', 40, 300, pageWidth - 80, 16, street || '');
        page.drawText('Straße', {
            x: 40,
            y: pageHeigth - 314,
            size: 10,
            color: rgb(0, 0, 0),
        });

        let postalCode = selReport?.postal_code || "";
        addTextFieldWithLimit9('Postal Code', 40, 340, 60, 16, postalCode || '');
        page.drawText('PLZ', {
            x: 40,
            y: pageHeigth - 354,
            size: 10,
            color: rgb(0, 0, 0),
        });

        let city = selReport?.city || "";
        let textFieldWidth = 440;
        addTextFieldWithLimit60('City', 16 + 100, 340, textFieldWidth, 16, city || '');
        page.drawText('Ort', {
            x: 16 + 100,
            y: pageHeigth - 354,
            size: 10,
            color: rgb(0, 0, 0),
        });


        page.drawText('Bei der o.a. pflegebedürftigen Person wurde am', {
            x: 40,
            y: pageHeigth - 378,
            size: 10,
            color: rgb(0, 0, 0),
        });
        addTextFieldWithLimit26('Bei der o.a. pflegebedürftigen Person wurde am', 270, 380, 16 * 10, 16, '');



        page.drawText('in der Zeit* von', {
            x: 40,
            y: pageHeigth - 410,
            size: 10,
            color: rgb(0, 0, 0),
        });
        addTextFieldWithLimit14('in der Zeit* von', 110, 415, 90, 16, '');
        page.drawText('Uhr bis', {
            x: 210,
            y: pageHeigth - 410,
            size: 10,
            color: rgb(0, 0, 0),
        });
        addTextFieldWithLimit18('Uhr ein Beratungsbesuch durchgeführt. t', 260, 415, 110, 16, '');
        page.drawText('Uhr ein Beratungsbesuch durchgeführt.', {
            x: 375,
            y: pageHeigth - 410,
            size: 10,
            color: rgb(0, 0, 0),
        });


        page.drawText('Hinweis: Die nachfolgenden Einschätzungen werden von der Beratungsperson dokumentiert:', {
            x: 40,
            y: pageHeigth - 430,
            size: 10,
            color: rgb(1, 0, 0),
        });


        const textBeforeBold = '1. Die Pflege- und Betreuungssituation wird';
        const textBold = 'aus Sicht der pflegebedürftigen Person sowie der Pflegeperson ';
        const textAfterBold = 'wie folgt eingeschätzt:';

        // const fontSize = 10;
        const lineHeight = 14;
        const marginX = 40;
        let currentX = marginX;
        let currentY = pageHeigth - 460;

        const drawTextWithWrapping = (text: any, font: any) => {
            const words = text.split(' ');
            let line = '';

            for (const word of words) {
                const testLine = line + word + ' ';
                const testLineWidth = font.widthOfTextAtSize(testLine, fontSize);

                if (currentX + testLineWidth > pageWidth - marginX) {
                    page.drawText(line, {
                        x: currentX,
                        y: currentY,
                        size: fontSize,
                        font: font,
                        color: rgb(0, 0, 0),
                    });

                    line = word + ' ';
                    currentY -= lineHeight;
                    currentX = marginX;
                } else {
                    line = testLine;
                }
            }

            if (line) {
                page.drawText(line, {
                    x: currentX,
                    y: currentY,
                    size: fontSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                currentX += font.widthOfTextAtSize(line, fontSize);
            }
        };

        // Draw the text parts with line wrapping
        drawTextWithWrapping(textBeforeBold, regularFont);
        drawTextWithWrapping(textBold, boldFont);
        drawTextWithWrapping(textAfterBold, regularFont);

        // Adding a single large text area
        addTextArea('Die Pflege- und Betreuungssituation', 40, 560, pageWidth - 80, 80, '');

        const part1Text = '2. Die Pflege- und Betreuungssituation wird';
        const boldText = ' aus Sicht der Beratungsperson ';
        const part2Text = 'wie folgt eingeschätzt:';

        const textSize = 10;
        const textLineHeight = 14;
        const textMarginX = 40;
        let currentTextX = textMarginX;
        let currentTextY = pageHeigth - 580;

        const drawWrappedText = (text: any, font: any) => {
            const words = text.split(' ');
            let line = '';

            for (const word of words) {
                const testLine = line + word + ' ';
                const testLineWidth = font.widthOfTextAtSize(testLine, textSize);

                if (currentTextX + testLineWidth > pageWidth - textMarginX) {
                    page.drawText(line, {
                        x: currentTextX,
                        y: currentTextY,
                        size: textSize,
                        font: font,
                        color: rgb(0, 0, 0),
                    });

                    line = word + ' ';
                    currentTextY -= textLineHeight;
                    currentTextX = textMarginX;
                } else {
                    line = testLine;
                }
            }

            if (line) {
                page.drawText(line, {
                    x: currentTextX,
                    y: currentTextY,
                    size: textSize,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                currentTextX += font.widthOfTextAtSize(line, textSize);
            }
        };

        // Draw the text parts with line wrapping
        drawWrappedText(part1Text, regularFont);
        drawWrappedText(boldText, boldFont);
        drawWrappedText(part2Text, regularFont);


        addTextArea('Die Pflege- und Betreuungssituation wird aus Sicht der Beratungsperson wie folgt eingeschätzt:1', 40, 665, pageWidth - 80, 80, '');


        page.drawText('3. Nach Einschätzung der Beratungsperson ist die Pflege- und Betreuungssituation sichergestellt:', {
            x: 40,
            y: pageHeigth - 680,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        addCheckBox('Nach Einschätzung der  checkbox', 40, 700, 11, 11);
        page.drawText('Ja.', {
            x: 55,
            y: pageHeigth - 698,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Nach Einschätzung der2  checkbox', 200, 700, 11, 11);
        page.drawText('Nein,', {
            x: 216,
            y: pageHeigth - 698,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        page.drawText('weil', {
            x: 40,
            y: pageHeigth - 718, // Adjusted to be just above the text area
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        addTextArea('Nach Einschätzung der1', 40, 804, pageWidth - 80, 80, '');




        page.drawText('*Angabe erforderlich, sofern eine Zeitvergütung bzw. Pauschale mit Zeitbezug vereinbart wurde (§ 37 Abs. 5 SGB XI, § 89 Abs. 1 und 3 SGB XI)', {
            x: 40,
            y: pageHeigth - 820,
            size: 8,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        const page2 = pdfDoc.addPage([595, 842]);
        page2.drawText('4. Werden aus Sicht der Beratungsperson Maßnahmen zur Verbesserung der Pflege- und \n  Betreuungssituation ange-regt?', {
            x: 40,
            y: pageHeigth - 30,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        addCheckBox('Nein, es werden keine Maßnahmen angeregt.2', 40, 70, 11, 11, page2);
        page2.drawText('Nein, es werden keine Maßnahmen angeregt.', {
            x: 57,
            y: pageHeigth - 67.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        addCheckBox('Ja, es werden folgende Maßnahmen angeregt:2', 40, 90, 11, 11, page2);
        page2.drawText('Ja, es werden folgende Maßnahmen angeregt:', {
            x: 57,
            y: pageHeigth - 87.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        addCheckBox('Pflegekurs/-schulung2', 40, 110, 11, 11, page2);
        page2.drawText('Pflegekurs/-schulung', {
            x: 57,
            y: pageHeigth - 107.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Tages-/Nachtpflege2', 200, 110, 11, 11, page2);
        page2.drawText('Tages-/Nachtpflege', {
            x: 218,
            y: pageHeigth - 108,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Pflegesachleistungen2', 400, 110, 11, 11, page2);
        page2.drawText('Pflegesachleistungen', {
            x: 418,
            y: pageHeigth - 108,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        // Second row
        addCheckBox('Kombinationsleistung2', 40, 130, 11, 11, page2);
        page2.drawText('Kombinationsleistung', {
            x: 57,
            y: pageHeigth - 127.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Angebote zur Unterstützung im Alltag2', 200, 130, 11, 11, page2);
        page2.drawText('Angebote zur Unterstützung im Alltag', {
            x: 218,
            y: pageHeigth - 127.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Kurzzeitpflege2', 400, 130, 11, 11, page2);
        page2.drawText('Kurzzeitpflege', {
            x: 418,
            y: pageHeigth - 127.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        // THird row
        addCheckBox('Verhinderungspflege2', 40, 150, 11, 11, page2);
        page2.drawText('Verhinderungspflege', {
            x: 57,
            y: pageHeigth - 147.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Pflege-/Hilfsmittel/technische Hilfen2', 200, 150, 11, 11, page2);
        page2.drawText('Pflege-/Hilfsmittel/technische Hilfen', {
            x: 218,
            y: pageHeigth - 147.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Wohnraumanpassung2', 400, 150, 11, 11, page2);
        page2.drawText('Wohnraumanpassung', {
            x: 418,
            y: pageHeigth - 147.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        // Fourth row
        addCheckBox('Rehabilitationsleistungen2', 40, 170, 11, 11, page2);
        page2.drawText('Rehabilitationsleistungen', {
            x: 57,
            y: pageHeigth - 167.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('erneute Pflegebegutachtung2', 200, 170, 11, 11, page2);
        page2.drawText('erneute Pflegebegutachtung', {
            x: 218,
            y: pageHeigth - 167.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Freizeitmöglichkeiten Pflegezeit/ Familienpflegezeit2', 400, 170, 11, 11, page2);
        page2.drawText('Freizeitmöglichkeiten Pflegezeit/ \n Familienpflegezeit', {
            x: 418,
            y: pageHeigth - 167.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        // Fifth row
        addCheckBox('Weitere Maßnahmen und Erläuterungen zu o. a. Maßnahmen2', 40, 190, 11, 11, page2);
        page2.drawText('Weitere Maßnahmen und Erläuterungen zu o. a. Maßnahmen', {
            x: 57,
            y: pageHeigth - 187.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addTextArea('eitere Maßnahmen und Erläuterungen zu o. a. Maßnahmen21', 40, 276, pageWidth - 80, 80, '', page2);

        page2.drawText('5.', {
            x: 40,
            y: pageHeigth - 300,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });
        addCheckBox('5. checkbox', 50, 302.5, 11, 11, page2);
        page2.drawText('Aus Sicht der Beratungsperson ist eine weitergehende Beratung nach § 7a SGB XI angezeigt.', {
            x: 67,
            y: pageHeigth - 302.5,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });



        //draw a rectange
        page2.drawRectangle({
            x: 40,
            y: pageHeigth - 320,
            width: 540,
            height: -500,
            borderColor: rgb(0, 0, 0),
            borderWidth: 1,
        });

        page2.drawText('Information', {
            x: 50,
            y: pageHeigth - 335,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n'],
            font: boldFont
        });

        page2.drawText(`Der Beratungsbesuch dient der Sicherung der Qualität der häuslichen Pflege und der regelmäßigen Hilfestellung und
praktischen pflegefachlichen Unterstützung der häuslich Pflegenden (§ 37 Abs. 3 SGB XI). Die Durchführung des Bera-
tungsbesuches ist gegenüber der Pflegekasse oder dem privaten Versicherungsunternehmen zu bestätigen (§§ 37 Abs.
4, 106a SGB XI). Die Weitergabe der beim Beratungsbesuch gewonnenen Erkenntnisse über die Möglichkeiten zur
Verbesserung der häuslichen Pflegesituation darf an die Pflegekasse oder das private Versicherungsunternehmen und
im Fall der Beihilfeberechtigung an die zuständige Beihilfefestsetzungsstelle nur mit Einwilligung der pflegebedürftigen
Person vorgenommen werden. Die Datenverarbeitung dient der regelmäßigen Hilfestellung und Beratung der Pflegen-
den zur Sicherung der Pflegequalität.`, {
            x: 50,
            y: pageHeigth - 355,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Die pflegebedürftige Person und die Pflegeperson(en) ', 50, 503, 11, 11, page2);
        page2.drawText(`Die pflegebedürftige Person und die Pflegeperson(en) wurden auch auf die Auskunfts-, Beratungs- und Unterstüt-\nzungsmöglichkeiten der für sie zuständigen Pflegestützpunkte sowie der Pflegeberatung nach § 7a SGB XI hinge-\nwiesen.`, {
            x: 68,
            y: pageHeigth - 500,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        page2.drawText(`Die Daten werden nicht an Dritte weitergegeben. Die Weitergabe der beim Beratungsbesuch gemachten Einschätzun-
gen an die Pflegekasse oder das private Versicherungsunternehmen und im Fall der Beihilfeberechtigung an die zu-
ständige Beihilfefestsetzungsstelle ist freiwillig. Aus einer Ablehnung der Einwilligung entstehen der pflegebedürftigen
Person keine Nachteile. Bei Vorliegen einer akuten Gefahrensituation (Gefahr im Verzug) erfolgt die Weitergabe der
Information, dass die Pflege nicht sichergestellt ist, jedoch auch ohne die Einwilligung der/ des Pflegebedürftigen. Eine
akute Gefahrensituation liegt vor, wenn nach Einschätzung der Beratungsperson ein unmittelbarer Schaden für Leib
oder Leben der/ des Pflegebedürftigen droht, weshalb ein sofortiges Einschreiten notwendig erscheint. Ebenfalls nicht
erforderlich ist die Einwilligung für die Weitergabe der Information, dass aus Sicht der Beratungsperson eine weiterge-
hende Beratung angezeigt ist.`, {
            x: 50,
            y: pageHeigth - 560,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });


        page2.drawText(`Die Einwilligung in die Datenverarbeitung kann jederzeit bei der zuständigen Pflegekasse oder dem privaten Versiche-
rungsunternehmen und im Fall der Beihilfeberechtigung bei der zuständigen Beihilfefestsetzungsstelle – auch ohne An-
gaben von Gründen – ganz oder teilweise schriftlich mit Wirkung für die Zukunft widerrufen werden. Nach Erhalt des
Widerrufs werden die betreffenden Daten nicht mehr genutzt bzw. verarbeitet und gelöscht. Durch den Widerruf der
Einwilligung wird die Rechtsmäßigkeit der aufgrund der Einwilligung bis zum Zeitpunkt des Widerrufs erfolgten Verarbei-
tung nicht berührt.`, {
            x: 50,
            y: pageHeigth - 725,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });



        // Page 3
        const page3 = pdfDoc.addPage([595, 842]);

        page3.drawText('Einwilligungserklärung:', {
            x: 20,
            y: pageHeigth - 30,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            font: boldFont,
            wordBreaks: ['\n']
        });

        addCheckBox('Ich stimme der Übermittlung der unter Ziffer 3. gemachten Ang', 30, 62, 11, 11, page3);
        page3.drawText(`Ich stimme der Übermittlung der unter Ziffer 3. gemachten Angaben zur Sicherstellung der Pflege- und Betreu-
ungs-situation an meine Pflegekasse bzw. mein privates Versicherungsunternehmen zu.`, {
            x: 48,
            y: pageHeigth - 60,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Ich stimme der Übermittlung der unter Ziffer 4. gemachten Ang', 30, 113, 11, 11, page3);
        page3.drawText(`Ich stimme der Übermittlung der unter Ziffer 4. genannten Empfehlungen zur Verbesserung der Betreuungs- und
Pflegesituation an meine Pflegekasse bzw. mein privates Versicherungsunternehmen zu.`, {
            x: 48,
            y: pageHeigth - 110,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Ich wünsche eine weitergehende Pflegeberatung nach § 7a SGB XI', 30, 162, 11, 11, page3);
        page3.drawText(`Ich wünsche eine weitergehende Pflegeberatung nach § 7a SGB XI`, {
            x: 48,
            y: pageHeigth - 160,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        page3.drawText(`Im Rahmen des Beratungsbesuchs kann aufgrund des Gesamteindrucks bzw. auf Hinweise der pflegebedürftigen Per-
son bzw. der Pflegeperson oder der gesetzlichen Betreuerin bzw. des gesetzlichen Betreuers zur Klärung von pflege-
fachlichen Fragestellungen eine Inaugenscheinnahme von bestimmten Körperregionen durch die Beratungsperson er-
forderlich sein. Eine solche Inaugenscheinnahme erfolgt nur mit Einwilligung der pflegebedürftigen Person:`, {
            x: 30,
            y: pageHeigth - 190,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Ich habe einer Inaugenscheinnahme zugestimmt und stimme der ', 30, 267, 11, 11, page3);
        page3.drawText(`Ich habe einer Inaugenscheinnahme zugestimmt und stimme der Übermittlung dieser Information an meine Pfle-
gekasse bzw. mein privates Versicherungsunternehmen zu.`, {
            x: 48,
            y: pageHeigth - 265,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        page3.drawText(`Im Rahmen einer Pflegeberatung nach § 7a SGB XI können die beim Beratungsbesuch gewonnenen Erkenntnisse von
der Pflegekasse oder dem privaten Versicherungsunternehmen für die weitere Beratung (z. B. zu Unterstützungsange-
boten) verarbeitet werden:`, {
            x: 30,
            y: pageHeigth - 310,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Ich stimme der Verarbeitung der übermittelten Ergebnisse des Ber ', 30, 372, 11, 11, page3);
        page3.drawText(`Ich stimme der Verarbeitung der übermittelten Ergebnisse des Beratungsbesuches zur Pflegeberatung nach § 7a
SGB XI zu.`, {
            x: 48,
            y: pageHeigth - 370,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        page3.drawText('Ort, Datum', {
            x: 20,
            y: pageHeigth - 435,
            size: 10,
            color: rgb(0, 0, 0),
        });


        addTextFieldWithLimit44('locationDate', 20, 420, 250, 16, '', page3);


        page3.drawRectangle({
            x: 310,
            y: pageHeigth - 420,
            width: 250,
            height: 0.5,
            borderColor: rgb(0, 0, 0),
            borderWidth: 1,
        });
        page3.drawText(`Unterschrift der pflegebedürftigen Person bzw. des
gesetzlichen Betreuers/des Vertreters
(nicht Zutreffendes streichen)`, {
            x: 310,
            y: pageHeigth - 435,
            lineHeight: 12,
            size: 10,
            color: rgb(0, 0, 0),
        });

        addCheckBox('Die für die/ den Pflegebedürftigen getroffenen Einschätzunge11', 30, 488, 11, 11, page3);
        page3.drawText(`Die für die/ den Pflegebedürftigen getroffenen Einschätzungen (Ziffer 1 und 2) sind nicht dokumentiert, weil
die/der Pflegebedürftige der Weitergabe dieser Daten nicht zugestimmt hat. Die Einschätzungen sind auf der Aus-
fertigung des Nachweises über den Beratungsbesuch für den Pflegebedürftigen dokumentiert.`, {
            x: 48,
            y: pageHeigth - 485,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        addCheckBox('Eine Ausfertigung des Nachweises wurde der pflegebedürftigen Person ausgehändigt', 30, 540, 11, 11, page3);
        page3.drawText(`Eine Ausfertigung des Nachweises wurde der pflegebedürftigen Person ausgehändigt`, {
            x: 48,
            y: pageHeigth - 538,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            wordBreaks: ['\n']
        });

        page3.drawRectangle({
            x: 30,
            y: pageHeigth - 610,
            width: 250,
            height: 0.5,
            borderColor: rgb(0, 0, 0),
            borderWidth: 1,
        });
        page3.drawText(`Stempel und Unterschrift der Beratungsperson
(Pflegedienst/ anerkannte Beratungsstelle/beauf-
tragte Pflegefachkraft/ Pflegeberater nach § 7a
SGB XI/ kommunale Beratungsstelle)`, {
            x: 30,
            y: pageHeigth - 622,
            lineHeight: 12,
            size: 10,
            color: rgb(0, 0, 0),
        });


        page3.drawText(`IK des Pflegedienstes/ der anerkannten
            Beratungsstelle/der beauftragten Pflegefachkraft/
            der kommunalen Beratungsstelle`, {
            x: 310,
            y: pageHeigth - 624,
            lineHeight: 12,
            size: 10,
            color: rgb(0, 0, 0),
        });

        // Add the text area using the addTextArea function
        // addTextAreaWithLimit89('careServiceInfo', 310, 610, 250, 26, '', page3);
        addTextFieldWithLimit44('careServiceInfo', 310, 610, 250, 16, '', page3);

        page3.drawText(`Anschrift der Pflegekasse/ des privaten Versicherungsunternehmens/ der Beihilfefestsetzungsstelle:`, {
            x: 30,
            y: pageHeigth - 677,
            size: 10,
            color: rgb(0, 0, 0),
            lineHeight: 14,
            font: boldFont,
            wordBreaks: ['\n']
        });

        addTextField('Last Name2', 30, 710, pageWidth - 80, 16, lastName || '', page3);
        page3.drawText('Name', {
            x: 30,
            y: pageHeigth - 725,
            size: 10,
            color: rgb(0, 0, 0),
        });

        addTextField('Street2', 30, 755, pageWidth - 80, 16, street || '', page3);
        page3.drawText('Straße', {
            x: 30,
            y: pageHeigth - 770,
            size: 10,
            color: rgb(0, 0, 0),
        });

        addTextFieldWithLimit13('Postal Code2', 30, 800, 16 * 5, 16, postalCode || '', page3);
        page3.drawText('PLZ', {
            x: 30,
            y: pageHeigth - 815,
            size: 10,
            color: rgb(0, 0, 0),
        });


        let city2 = selReport?.city || "";
        let textFieldWidth2 = 420; // Set the desired width

        // Adjust the function call to include the desired width
        addTextFieldWithLimit52('City2', 26 + 100, 800, textFieldWidth2, 16, city2 || '', page3);

        page3.drawText('Ort', {
            x: 26 + 100,
            y: pageHeigth - 815,
            size: 10,
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
                        {moment(dob).format("DD-MM-YYYY")}
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
                                <div className="flex justify-center mb-6">
                                    <img src={logo} alt="Logo" className="h-16" />
                                </div>
                                <h4 className="text-center font-bold">
                                    Nachweis über einen Beratungsbesuch nach § 37 Abs. 3 SGB XI
                                </h4>
                                <p className="mt-10 font-bold text-[red]">Angaben zur pflegebedürftigen Person:</p>
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
