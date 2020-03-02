import dayjs from 'dayjs';

const helpers = {
    formatDate(date) {
        // Takes JS Date and returns in YYYY-MM-DD format

        // If date is already in YYYY-MM-DD format return it
        const regex = /(\d{4})-(\d{2})-(\d{2})/g;
        if (regex.exec(date)) {
            return date;
        }

        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) {
            month = '0' + month;
        }

        if (day.length < 2) {
            day = '0' + day;
        }

        return [year, month, day].join('-');
    },
    boolToNumber(val) {
        if (val === true) {
            return 1;
        } else {
            return 0;
        }
    },
    checkDueDate(date) {
        const val = dayjs(this.formatDate(date)).$d;
        const now = dayjs();
        return val >= now.subtract(2, 'month') && val <= now.add(9, 'month');
    },
    checkDueDatePicker(date) {
        const val = dayjs(this.formatDate(date)).$d;
        const now = dayjs();
        return !(val >= now.subtract(2, 'month') && val <= now.add(9, 'month'));
    },
    addDatePickerPlaceholders() {
        document.querySelectorAll('.vdp-datepicker input').forEach(element => element.placeholder = 'DD/MM/YYYY');
    },
    goToInput(currentInput, nextInput, index) {
        const input = nextInput + index;
        const inputLength = this.children[index][currentInput].length;

        if (inputLength === 2) {
            this.$refs[input][0].focus();
        }
    },
    birthDateEntered(c) {
        return (c.birthDay.length > 0 || c.birthMonth.length > 0 || c.birthYear.length > 0);
    },
    prepareId(str) {
        // Remove spaces and set to lower case
        return str.replace(/\s+/g, '-').toLowerCase();
    },
    updateRadioOption(state, e) {
        this[state].forEach((item, i) => {
            this[state][i].selected = item.name === e.target.value;
        });
    }
};

export default helpers;
