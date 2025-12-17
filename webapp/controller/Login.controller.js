sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("eshm.controller.Login", {
        onInit: function () {
        },

        onLogin: function () {
            var sEmpId = this.getView().byId("empIdInput").getValue();
            var sPassword = this.getView().byId("passwordInput").getValue();

            if (!sEmpId || !sPassword) {
                MessageToast.show("Please enter both ID and Password.");
                return;
            }

            var sPath = "/Z_LOGINSet(EmpId='" + sEmpId + "',Password='" + sPassword + "')";
            var oModel = this.getOwnerComponent().getModel();

            oModel.read(sPath, {
                success: function (oData) {
                    MessageToast.show("Login Successful");
                    this.getOwnerComponent().getRouter().navTo("RouteDashboard");
                }.bind(this),
                error: function (oError) {
                    MessageToast.show("Login Failed. Please check credentials.");
                }
            });
        }
    });
});
