define('components/opTip', function(require, exports, module) {

package = angular.module("RDash");
package.component("optip", {
    template: "<div ng-controller=\"opTipCtr\" class=\"custom-modal\">\n    <div class=\"custom-modal-op-tip\">\n        <div class=\"custom-modal-op-cont\">\n            <span ng-class=\"{true:'icon-icon_check_circle_o op-tip-icon',false:'icon-icon_close_circle_o op-tip-icon-error'}[flag==1]\" class=\"\"></span>\n            <span class=\"op-tip-text\" ng-bind=\"optipText\"></span>\n        </div>\n    </div>\n\n</div>\n\n"
});


});
