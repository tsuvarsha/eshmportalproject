sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("eshm.controller.Dashboard", {
        onInit: function () {
        },

        onLogout: function () {
            this.getOwnerComponent().getRouter().navTo("RouteLogin");
        },

        formatter: {
            severityState: function (sSeverity) {
                if (sSeverity === 'High') return 'Error';
                if (sSeverity === 'Medium') return 'Warning';
                if (sSeverity === 'Low') return 'Success';
                return 'None';
            }
        }
    });
});
