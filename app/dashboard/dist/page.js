"use strict";
exports.__esModule = true;
var AssetTable_1 = require("@/components/AssetTable");
var dashboard_1 = require("@/components/homepage/dashboard");
var card_1 = require("@/components/ui/card");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var CountAssets_1 = require("../../components/ui/CountAssets");
var CountLicense_1 = require("@/components/ui/CountLicense");
var CountAccessories_1 = require("@/components/ui/CountAccessories");
var CountConsumables_1 = require("@/components/ui/CountConsumables");
var CountComponent_1 = require("@/components/ui/CountComponent");
var CountFurniture_1 = require("@/components/ui/CountFurniture");
var CountVehicle_1 = require("@/components/ui/CountVehicle");
var CountAppliances_1 = require("@/components/ui/CountAppliances");
function page() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'w-full h-screen' },
            react_1["default"].createElement(dashboard_1.Dashboard, null,
                react_1["default"].createElement(AssetTable_1["default"], null)),
            react_1["default"].createElement("div", { className: "grid pl-44 gap-3 pr-4 lg:grid-cols-9" },
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-0" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Assets"),
                        react_1["default"].createElement(lucide_react_1.PackageIcon, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement(card_1.CardContent, null,
                        react_1["default"].createElement("div", { className: "text-2xl font-bold" },
                            react_1["default"].createElement(CountAssets_1["default"], null)),
                        react_1["default"].createElement("a", { href: "/assets", className: "text-sm underline-offset-8 underline text-primary font-bold " }, "View All"))),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-1" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Licenses"),
                        react_1["default"].createElement(lucide_react_1.File, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountLicense_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/license", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-2" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Accessories"),
                        react_1["default"].createElement(lucide_react_1.Keyboard, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountAccessories_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/accessories", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-3" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Consumables"),
                        react_1["default"].createElement(lucide_react_1.Droplets, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountConsumables_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/consumables", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-4" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Component"),
                        react_1["default"].createElement(lucide_react_1.Inbox, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountComponent_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/component", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-5" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Furnitures"),
                        react_1["default"].createElement(lucide_react_1.ArmchairIcon, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountFurniture_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/furniture", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-5" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Vehicles"),
                        react_1["default"].createElement(lucide_react_1.CarIcon, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountVehicle_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/vehicle", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-5" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Appliances"),
                        react_1["default"].createElement(lucide_react_1.MicrowaveIcon, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" },
                        react_1["default"].createElement(CountAppliances_1["default"], null)),
                    react_1["default"].createElement("a", { href: "/appliance", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All")),
                react_1["default"].createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-5" },
                    react_1["default"].createElement(card_1.CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" },
                        react_1["default"].createElement(card_1.CardTitle, { className: " text-base font-bold" }, "Users"),
                        react_1["default"].createElement(lucide_react_1.Users, { className: "h-4 w-4 text-muted-foreground" })),
                    react_1["default"].createElement("div", { className: "text-2xl font-bold pl-6" }, "123"),
                    react_1["default"].createElement("a", { href: "/users", className: "pl-6 text-sm underline-offset-8 underline text-primary font-bold" }, "View All"))),
            react_1["default"].createElement("footer", { className: "flex mt-4 items-center justify-center" },
                react_1["default"].createElement("h1", null, "\u00A9 Created by the OG OJT, happy coding \uD83D\uDE09")))));
}
exports["default"] = page;
