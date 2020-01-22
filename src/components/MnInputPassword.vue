<template>
    <div
        class="form-group"
        :class="inputClass"
    >
        <label
            :for="inputId"
            :class="labelClass"
        >
            {{ inputPlaceholder }}
        </label>

        <div class="w-100 position-relative">
            <input
                :id="inputId"
                :type="fieldType"
                :value="value"
                :placeholder="inputPlaceholder"
                class="form-control"
                @focus="passwordFocus"
                @blur="passwordBlur"
                @input="passwordInput"
                @keypress.enter.prevent="handleEnter"
            >

            <button
                v-if="showVisibilityIcon"
                class="input-visible-icon"
                @click.prevent="passwordVisibility"
            >
                <i
                    class="fa"
                    :class="visibilityIcon"
                />
            </button>
        </div>

        <div
            v-if="!passwordHint && formSubmitClicked && !v.required"
            class="validation-text position-absolute"
        >
            Password is required
        </div>

        <div
            v-if="passwordHint"
            class="validation-text validation-text--muted position-absolute"
        >
            {{ v.$params.minLength.min }} characters or more
        </div>

        <div
            v-if="!passwordHint && !v.minLength"
            class="validation-text position-absolute"
        >
            Call that a password? {{ v.$params.minLength.min }} characters or more please
        </div>

        <div
            v-if="!passwordHint && passwordWeak"
            class="validation-text validation-text--warning position-absolute"
        >
            Not the best password, but it will do
        </div>

        <div
            v-if="passwordMedium"
            class="validation-text validation-text--warning position-absolute"
        >
            Not bad&hellip;
        </div>

        <div
            v-if="passwordStrong"
            class="validation-text validation-text--success position-absolute"
        >
            Lovely job!
        </div>
    </div>
</template>

<script>
export default {
    name: 'MnInputPassword',
    props: {
        v: { // vuelidate object
            type: Object,
            required: true
        },
        formSubmitClicked: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        inputId: {
            type: String,
            required: true
        },
        inputPlaceholder: {
            type: String,
            default: 'Enter your password'
        },
        labelClass: {
            type: String,
            default: 'sr-only'
        },
        showVisibilityIcon: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            passwordHint: false,
            fieldType: 'password'
        };
    },
    computed: {
        visibilityIcon() {
            if (this.fieldType === 'password') {
                return 'fa-eye';
            } else {
                return 'fa-eye-slash';
            }
        },
        inputClass() {
            if (!this.passwordHint && !this.v.minLength || this.v.$error) {
                return 'validation-error';
            } else if (this.passwordWeak || this.passwordMedium) {
                return 'validation-warning';
            } else if (this.passwordStrong) {
                return 'validation-success';
            } else {
                return '';
            }
        },
        passwordWeak() {
            return (
                this.value.length >= this.v.$params.minLength.min &&
                !this.mediumRegex(this.value) &&
                !this.strongRegex(this.value)
            );
        },
        passwordMedium() {
            return (
                this.mediumRegex(this.value) &&
                !this.strongRegex(this.value)
            );
        },
        passwordStrong() {
            return this.strongRegex(this.value);
        },
    },
    methods: {
        handleEnter() {
            this.$emit('handleEnter');
        },
        passwordVisibility() {
            this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
        },
        passwordFocus() {
            if (this.value.length < this.v.$params.minLength.min) {
                this.passwordHint = true;
            }
        },
        passwordBlur() {
            this.passwordHint = false;
        },
        passwordInput() {
            this.$emit('input', event.target.value);
            if (this.value.length >= this.v.$params.minLength.min) {
                this.passwordHint = false;
            } else {
                this.passwordHint = true;
            }
        },
        /* eslint-disable */
        mediumRegex(string) {
            // Medium password rules: one lowercase character, one uppercase character, one numeric character, one special character, min 8 characters
            const regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z0-9!@#\$%\^&\*\?]))(?=.{8,})");
            return regEx.test(string);
        },
        strongRegex(string) {
            // Strong password rules: two lowercase characters, two uppercase characters, two numeric characters, two special characters, min 8 characters
            const regEx = new RegExp("^((?=.*[a-z])(?=.*[A-Z0-9!@#\$%\^&\*\?]{2}))(?=.{8,})");
            return regEx.test(string);
        },
    },
};
</script>
