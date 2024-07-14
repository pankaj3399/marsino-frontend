import { Menu } from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Topbar from "../components/partial/Topbar";
import { ICONS } from "../assets/icons";
// import { IMAGES } from "../assets/images";
// import type { MenuProps } from "antd";
import { ROUTES } from "../router/RouteConfig";

type Props = {
  children?: React.ReactNode;
};


type SidebarMenu = {
  key: string;
  icon: React.ReactNode;
  label: string;
  childrens?: {
    key: string;
    label: string;
  } | any
  path: string;
  type?: "group";
  className?: string;
};
const DashboardLayout = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [authState, setAuthState] = useState(true);

  const onClickMenuItem = (e: any) => {
    setSelectedKey(e.key);
    // navigate(keyRouteMap[e.key])
  };

  const location = useLocation();
  console.log(location.pathname);

  // type MenuItem = Required<MenuProps>["items"][number];

  // function getItem(
  //   label: React.ReactNode,
  //   key: React.Key,
  //   icon?: React.ReactNode,
  //   path?: string,
  //   className?: string,
  //   children?: MenuItem[],
  //   type?: "group"
  // ): MenuItem {
  //   return {
  //     key,
  //     icon,
  //     children,
  //     label,
  //     path,
  //     className,
  //     type,
  //   } as MenuItem;
  // }

  const [keyCollpaseMenu, setKeyCollpaseMenu] = useState<any>({
    "2": false,
  });

  const items :SidebarMenu[]  = [
    {
      key: ROUTES.REPORTS.key,
      icon: <img src={ROUTES.REPORTS.icon} className="w-[18px] h-[18px]" alt="" />,
      label: ROUTES.REPORTS.label,
      path: ROUTES.REPORTS.path,
    },
    // {
    //   key: ROUTES.CANDIDATES.key,
    //   icon: (
    //     <img
    //       src={ROUTES.CANDIDATES.icon}
    //       className="w-[18px] h-[18px]"
    //       alt=""
    //     />
    //   ),
    //   label: ROUTES.CANDIDATES.label,
    //   path: ROUTES.CANDIDATES.path,
    //   type: "subMenu",
    //   childrens: Array.from(
    //     Object.entries(ROUTES.CANDIDATES.childrens).map(([key, value]) => {
    //       return {
    //         key: key,
    //         label: value.label,
    //         path: value.path,
    //       };
    //     })
    //   ),
    // },
  ];
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex">
        <Menu
          onClick={onClickMenuItem}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          style={{
            width: !collapsed ? "260px" : "64px",
            minWidth: !collapsed ? "260px" : "64px",
            backgroundColor: "#FFFFFF",
            minHeight: "100vh",
            maxHeight: "100vh",
            border: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0px",
          }}
          // items={items2}
          selectedKeys={[selectedKey]}
          inlineCollapsed={collapsed}
        >
          <div
            className={`flex mt-2 justify-start ${
              collapsed ? "pl-[14px]" : "pl-[20px]"
            }`}
          >
            <div
              className="rounded-[12px] p-2 h-[35px] w-[35px] border border-border_light flex items-center justify-center cursor-pointer"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            >
              {collapsed ? (
                <img src={ICONS.SIDEBAR_CROSS} alt="" />
              ) : (
                <img src={ICONS.SIDEBAR_HAMBURGER} alt="" />
              )}
            </div>
          </div>
          <div
            className={`flex h-[60px] justify-start mt-8 items-center gap-3 mb-5 ${
              collapsed ? "pl-[14px]" : "pl-[20px]"
            }`}
          >
            {collapsed ? (
              null
            ) : (
              <h4 className="text-4xl">
                LOGO
              </h4>
            )}
          </div>

          {items.map((item) => (
            <>
              <div
                onClick={() => {
                  if (item.childrens) {
                    setKeyCollpaseMenu({
                      ...keyCollpaseMenu,
                      [item.key]: !keyCollpaseMenu[item.key],
                    });
                  } else {
                    navigate(item.path);
                  }
                }}
                className={`my-1 flex py-3 cursor-pointer px-6 hover:bg-bg_light hover:border-l-4 hover:border-primary hover:pl-[16px] justify-between items-center ${
                  location.pathname === item.path ||
                  (item.childrens &&
                    item.childrens.some(
                      (childItem:any) => location.pathname === childItem.path
                    ))
                    ? "bg-bg_light border-l-4 border-primary pl-[16px]"
                    : "text-black pl-[20px]"
                } ${collapsed ? "" : ""}}`}
              >
                <div className="flex gap-2">
                  {item.icon}
                  {!collapsed && (
                    <div className="text-sm truncate">{item.label}</div>
                  )}
                </div>
                {item.childrens && !collapsed && (
                  <div>
                    <img
                      style={{
                        transform: keyCollpaseMenu[item.key]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "all 0.3s ease-in-out",
                      }}
                      src={ICONS.CARET_DOWN}
                      alt=""
                    />
                  </div>
                )}
              </div>
              {item.childrens &&
                keyCollpaseMenu[item.key] &&
                !collapsed &&
                item.childrens.map((childItem:any) => (
                  <div
                    onClick={() => {
                      navigate(childItem.path);
                    }}
                    className={`my-1 flex py-3 cursor-pointer px-6 hover:bg-bg_light hover:border-l-4 hover:border-primary hover:pl-[16px] justify-between items-center ${
                      location.pathname === childItem.path
                        ? "bg-bg_light border-l-4 border-primary pl-[16px]"
                        : "text-black pl-[20px]"
                    } ${collapsed ? "" : ""}}`}
                  >
                    <div className="flex gap-2">
                      <div className="text-sm truncate ml-[26px]">
                        {childItem.label}
                      </div>
                    </div>
                  </div>
                ))}
              <div></div>
            </>
          ))}
        </Menu>
        <div
          className={`grow bg-main_bg relative ${
            location.pathname === "/profile" ? "pt-6" : "p-6"
          }`}
        >
          <div className={`${location.pathname === "/profile" ? "px-6" : ""}`}>
            <Topbar />
          </div>

          {authState && props.children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
