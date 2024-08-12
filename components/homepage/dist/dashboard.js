"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Dashboard = void 0;
var link_1 = require("next/link");
var Nav_1 = require("@/app/sidenav/Nav");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var card_1 = require("@/components/ui/card");
var table_1 = require("@/components/ui/table");
var scroll_area_1 = require("@/components/ui/scroll-area");
var barchart_1 = require("@/app/analyticcomponent/barchart");
var side_1 = require("@/app/sidenav/side");
function Dashboard(_a) {
    var children = _a.children;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, (React.createElement("div", null,
                    React.createElement("div", { className: " w-full" },
                        React.createElement(Nav_1["default"], null),
                        React.createElement("div", { className: " absolute" },
                            React.createElement("div", { className: "flex justify-center w-40 bg-background px-4 md:px-6 bg-yellow-300 font-bold " },
                                React.createElement(side_1.Side, null))),
                        React.createElement("div", null,
                            React.createElement("main", { className: "flex flex-1 pl-44 flex-col pr-4 pb-4 md:gap-8 " },
                                React.createElement("div", { className: "grid gap-1 md:grid-cols-2 md:gap-4 lg:grid-cols-9" }),
                                React.createElement("div", { className: "grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3" },
                                    React.createElement(card_1.Card, { className: "col-span-2", "x-chunk": "dashboard-01-chunk-4" },
                                        React.createElement(card_1.CardHeader, { className: "flex flex-row items-center" },
                                            React.createElement("div", { className: "grid gap-2" },
                                                React.createElement(card_1.CardTitle, null, "Assets"),
                                                React.createElement(card_1.CardDescription, null, "Recent Assets from your Inventory")),
                                            React.createElement(button_1.Button, { asChild: true, size: "sm", className: "ml-auto gap-1 bg-yellow-300 text-neutral-950" },
                                                React.createElement(link_1["default"], { href: "/assets" },
                                                    "View All",
                                                    React.createElement(lucide_react_1.ArrowUpRight, { className: "h-4 w-4" })))),
                                        React.createElement(card_1.CardContent, null,
                                            React.createElement(scroll_area_1.ScrollArea, { className: " h-96 w-auto rounded-md border" },
                                                React.createElement(table_1.Table, null,
                                                    React.createElement(table_1.TableHeader, null,
                                                        React.createElement(table_1.TableRow, null,
                                                            React.createElement(table_1.TableHead, null, "Model"),
                                                            React.createElement(table_1.TableHead, null, "Status"),
                                                            React.createElement(table_1.TableHead, null, "Serial"),
                                                            React.createElement(table_1.TableHead, null, "Category"),
                                                            React.createElement(table_1.TableHead, null, "Created At"),
                                                            React.createElement(table_1.TableHead, null, "Actions"))),
                                                    children)))),
                                    React.createElement(card_1.Card, { "x-chunk": "dashboard-01-chunk-1" },
                                        React.createElement(card_1.CardHeader, null,
                                            React.createElement(card_1.CardTitle, null, "Asset By Status")),
                                        React.createElement(card_1.CardContent, null,
                                            React.createElement(barchart_1["default"], null)))))))))];
        });
    });
}
exports.Dashboard = Dashboard;
