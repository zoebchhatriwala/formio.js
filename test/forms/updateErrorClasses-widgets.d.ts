declare namespace _default {
    const type: string;
    const components: ({
        label: string;
        description: string;
        tooltip: string;
        shortcut: string;
        inputType: string;
        customClass: string;
        tabindex: string;
        hidden: boolean;
        hideLabel: boolean;
        autofocus: boolean;
        disabled: boolean;
        tableView: boolean;
        modalEdit: boolean;
        persistent: boolean;
        protected: boolean;
        dbIndex: boolean;
        encrypted: boolean;
        redrawOn: string;
        clearOnHide: boolean;
        customDefaultValue: string;
        calculateValue: string;
        calculateServer: boolean;
        allowCalculateOverride: boolean;
        validate: {
            required: boolean;
            customMessage: string;
            custom: string;
            customPrivate: boolean;
            json: string;
            strictDateValidation: boolean;
            multiple: boolean;
            unique: boolean;
        };
        errorLabel: string;
        key: string;
        conditional: {
            show: null;
            when: null;
            eq: string;
            json: string;
        };
        customConditional: string;
        overlay: {
            style: string;
            page: string;
            left: string;
            top: string;
            width: string;
            height: string;
        };
        type: string;
        name: string;
        value: string;
        input: boolean;
        placeholder: string;
        prefix: string;
        suffix: string;
        multiple: boolean;
        unique: boolean;
        refreshOn: string;
        labelPosition: string;
        widget: null;
        validateOn: string;
        showCharCount: boolean;
        showWordCount: boolean;
        allowMultipleMasks: boolean;
        dataGridLabel: boolean;
        id: string;
        defaultValue: boolean;
        displayInTimezone?: undefined;
        useLocaleSettings?: undefined;
        allowInput?: undefined;
        format?: undefined;
        enableDate?: undefined;
        enableMinDateInput?: undefined;
        datePicker?: undefined;
        enableMaxDateInput?: undefined;
        enableTime?: undefined;
        timePicker?: undefined;
        defaultDate?: undefined;
        timezone?: undefined;
        datepickerMode?: undefined;
        size?: undefined;
        leftIcon?: undefined;
        rightIcon?: undefined;
        block?: undefined;
        action?: undefined;
        disableOnInvalid?: undefined;
        theme?: undefined;
    } | {
        label: string;
        labelPosition: string;
        displayInTimezone: string;
        useLocaleSettings: boolean;
        allowInput: boolean;
        format: string;
        placeholder: string;
        description: string;
        tooltip: string;
        customClass: string;
        tabindex: string;
        hidden: boolean;
        hideLabel: boolean;
        autofocus: boolean;
        disabled: boolean;
        tableView: boolean;
        modalEdit: boolean;
        enableDate: boolean;
        enableMinDateInput: boolean;
        datePicker: {
            minDate: null;
            maxDate: null;
            disable: string;
            disableFunction: string;
            disableWeekends: boolean;
            disableWeekdays: boolean;
            showWeeks: boolean;
            startingDay: number;
            initDate: string;
            minMode: string;
            maxMode: string;
            yearRows: number;
            yearColumns: number;
        };
        enableMaxDateInput: boolean;
        enableTime: boolean;
        timePicker: {
            showMeridian: boolean;
            hourStep: number;
            minuteStep: number;
            readonlyInput: boolean;
            mousewheel: boolean;
            arrowkeys: boolean;
        };
        multiple: boolean;
        defaultValue: string;
        defaultDate: string;
        persistent: boolean;
        protected: boolean;
        dbIndex: boolean;
        encrypted: boolean;
        redrawOn: string;
        clearOnHide: boolean;
        customDefaultValue: string;
        calculateValue: string;
        calculateServer: boolean;
        allowCalculateOverride: boolean;
        validate: {
            required: boolean;
            customMessage: string;
            custom: string;
            customPrivate: boolean;
            json: string;
            strictDateValidation: boolean;
            multiple: boolean;
            unique: boolean;
        };
        unique: boolean;
        validateOn: string;
        errorLabel: string;
        key: string;
        conditional: {
            show: null;
            when: null;
            eq: string;
            json: string;
        };
        customConditional: string;
        overlay: {
            style: string;
            page: string;
            left: string;
            top: string;
            width: string;
            height: string;
        };
        type: string;
        timezone: string;
        input: boolean;
        widget: {
            type: string;
            displayInTimezone: string;
            locale: string;
            useLocaleSettings: boolean;
            allowInput: boolean;
            mode: string;
            enableTime: boolean;
            noCalendar: boolean;
            format: string;
            hourIncrement: number;
            minuteIncrement: number;
            time_24hr: boolean;
            minDate: null;
            disabledDates: string;
            disableWeekends: boolean;
            disableWeekdays: boolean;
            disableFunction: string;
            maxDate: null;
        };
        prefix: string;
        suffix: string;
        refreshOn: string;
        showCharCount: boolean;
        showWordCount: boolean;
        allowMultipleMasks: boolean;
        datepickerMode: string;
        id: string;
        shortcut?: undefined;
        inputType?: undefined;
        name?: undefined;
        value?: undefined;
        dataGridLabel?: undefined;
        size?: undefined;
        leftIcon?: undefined;
        rightIcon?: undefined;
        block?: undefined;
        action?: undefined;
        disableOnInvalid?: undefined;
        theme?: undefined;
    } | {
        input: boolean;
        label: string;
        tableView: boolean;
        key: string;
        type: string;
        placeholder: string;
        prefix: string;
        customClass: string;
        suffix: string;
        multiple: boolean;
        defaultValue: null;
        protected: boolean;
        unique: boolean;
        persistent: boolean;
        hidden: boolean;
        clearOnHide: boolean;
        refreshOn: string;
        redrawOn: string;
        modalEdit: boolean;
        labelPosition: string;
        description: string;
        errorLabel: string;
        tooltip: string;
        hideLabel: boolean;
        tabindex: string;
        disabled: boolean;
        autofocus: boolean;
        dbIndex: boolean;
        customDefaultValue: string;
        calculateValue: string;
        calculateServer: boolean;
        widget: {
            type: string;
            displayInTimezone?: undefined;
            locale?: undefined;
            useLocaleSettings?: undefined;
            allowInput?: undefined;
            mode?: undefined;
            enableTime?: undefined;
            noCalendar?: undefined;
            format?: undefined;
            hourIncrement?: undefined;
            minuteIncrement?: undefined;
            time_24hr?: undefined;
            minDate?: undefined;
            disabledDates?: undefined;
            disableWeekends?: undefined;
            disableWeekdays?: undefined;
            disableFunction?: undefined;
            maxDate?: undefined;
        };
        validateOn: string;
        validate: {
            required: boolean;
            custom: string;
            customPrivate: boolean;
            strictDateValidation: boolean;
            multiple: boolean;
            unique: boolean;
            customMessage?: undefined;
            json?: undefined;
        };
        conditional: {
            show: null;
            when: null;
            eq: string;
            json?: undefined;
        };
        overlay: {
            style: string;
            left: string;
            top: string;
            width: string;
            height: string;
            page?: undefined;
        };
        allowCalculateOverride: boolean;
        encrypted: boolean;
        showCharCount: boolean;
        showWordCount: boolean;
        allowMultipleMasks: boolean;
        size: string;
        leftIcon: string;
        rightIcon: string;
        block: boolean;
        action: string;
        disableOnInvalid: boolean;
        theme: string;
        dataGridLabel: boolean;
        id: string;
        shortcut?: undefined;
        inputType?: undefined;
        name?: undefined;
        value?: undefined;
        displayInTimezone?: undefined;
        useLocaleSettings?: undefined;
        allowInput?: undefined;
        format?: undefined;
        enableDate?: undefined;
        enableMinDateInput?: undefined;
        datePicker?: undefined;
        enableMaxDateInput?: undefined;
        enableTime?: undefined;
        timePicker?: undefined;
        defaultDate?: undefined;
        timezone?: undefined;
        datepickerMode?: undefined;
    })[];
    const revisions: string;
    const _vid: number;
    const title: string;
    const display: string;
    const name: string;
    const path: string;
    const project: string;
    const controller: string;
}
export default _default;
