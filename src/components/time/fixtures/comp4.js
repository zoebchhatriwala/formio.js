export default {
  "type": "form",
  "display": "wizard",
  "components": [
    {
      "title": "Page 1",
      "breadcrumbClickable": true,
      "buttonSettings": {
        "previous": true,
        "cancel": true,
        "next": true
      },
      "navigateOnEnter": false,
      "saveOnEnter": false,
      "scrollToTop": false,
      "collapsible": false,
      "key": "page1",
      "type": "panel",
      "label": "Page 1",
      "components": [
        {
          "label": "Time",
          "disabled": true,
          "alwaysEnabled": false,
          "tableView": true,
          "defaultValue": "03:03 PM",
          "key": "time1",
          "type": "time",
          "input": true,
          "inputMask": "99:99",
          "hideOnChildrenHidden": false,
          "id": "efw9yyq",
          "placeholder": "",
          "prefix": "",
          "customClass": "",
          "suffix": "",
          "multiple": false,
          "protected": false,
          "unique": false,
          "persistent": true,
          "hidden": false,
          "clearOnHide": true,
          "refreshOn": "",
          "redrawOn": "",
          "modalEdit": false,
          "dataGridLabel": false,
          "labelPosition": "top",
          "description": "",
          "errorLabel": "",
          "tooltip": "",
          "hideLabel": false,
          "tabindex": "",
          "autofocus": false,
          "dbIndex": false,
          "customDefaultValue": "",
          "calculateValue": "",
          "calculateServer": false,
          "widget": {
            "type": "input"
          },
          "attributes": {},
          "validateOn": "change",
          "validate": {
            "required": false,
            "custom": "",
            "customPrivate": false,
            "strictDateValidation": false,
            "multiple": false,
            "unique": false,
            "minLength": "",
            "maxLength": "",
            "pattern": ""
          },
          "conditional": {
            "show": null,
            "when": null,
            "eq": ""
          },
          "overlay": {
            "style": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "allowCalculateOverride": false,
          "encrypted": false,
          "showCharCount": false,
          "showWordCount": false,
          "properties": {},
          "allowMultipleMasks": false,
          "addons": [],
          "mask": false,
          "inputType": "time",
          "inputFormat": "plain",
          "displayMask": "",
          "spellcheck": true,
          "truncateMultipleSpaces": false,
          "format": "HH:mm",
          "dataFormat": "HH:mm:ss"
        }
      ],
      "input": false,
      "tableView": false,
      "id": "e7vej1d",
      "placeholder": "",
      "prefix": "",
      "customClass": "",
      "suffix": "",
      "multiple": false,
      "defaultValue": null,
      "protected": false,
      "unique": false,
      "persistent": false,
      "hidden": false,
      "clearOnHide": false,
      "refreshOn": "",
      "redrawOn": "",
      "modalEdit": false,
      "dataGridLabel": false,
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": false,
      "tabindex": "",
      "disabled": false,
      "autofocus": false,
      "dbIndex": false,
      "customDefaultValue": "",
      "calculateValue": "",
      "calculateServer": false,
      "widget": null,
      "attributes": {},
      "validateOn": "change",
      "validate": {
        "required": false,
        "custom": "",
        "customPrivate": false,
        "strictDateValidation": false,
        "multiple": false,
        "unique": false
      },
      "conditional": {
        "show": null,
        "when": null,
        "eq": ""
      },
      "overlay": {
        "style": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "allowCalculateOverride": false,
      "encrypted": false,
      "showCharCount": false,
      "showWordCount": false,
      "properties": {},
      "allowMultipleMasks": false,
      "addons": [],
      "tree": false,
      "lazyLoad": false,
      "theme": "default",
      "breadcrumb": "default"
    }
  ],
}
