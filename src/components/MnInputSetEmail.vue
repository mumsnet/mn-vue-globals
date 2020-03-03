<template>
    <div
        class="form-group mb-3"
        :class="validationClass"
    >
        <label
            :for="id"
            :class="labelClass"
        >
            {{ labelText }}
        </label>

        <div class="position-relative">
            <input
                :id="id"
                type="email"
                :value="value"
                class="form-control"
                :placeholder="placeholderText"
                autocomplete="email"
                @blur="updateValue"
                @keypress.enter.prevent
            >

            <mn-load-spinner
                v-if="loading"
                color="#989AA1"
                size="20px"
                class="input-loader-icon"
            />
        </div>

        <div
            v-if="!emailValidationText.length && formSubmitClicked && !v.required"
            class="validation-text position-absolute"
        >
            Email is required
        </div>

        <div
            v-if="!emailValidationText.length && !v.email"
            class="validation-text position-absolute"
        >
            This email address doesn't seem right - please try again.
        </div>

        <div
            v-if="emailValidationText.length"
            class="validation-text position-absolute"
        >
            {{ emailValidationText }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterInputEmail',
    props: {
        v: {
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
        loading: {
            type: Boolean,
            default: false
        },
        labelText: {
            type: String,
            default: 'Email address'
        },
        placeholderText: {
            type: String,
            default: 'Enter your email address'
        },
        id: {
            type: String,
            required: true
        },
        labelClass: {
            type: String,
            default: 'text-small'
        },
        emailValidationText: {
            type: String,
            required: true
        },
        emailValidationSuccessful: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        validationClass() {
            if (this.emailValidationSuccessful) {
                return 'validation-success';
            } else if (!this.v.email || this.v.$error || this.emailValidationText.length && !this.emailValidationSuccessful) {
                return 'validation-error';
            } else {
                return '';
            }
        }
    },
    methods: {
        updateValue(event) {
            this.emailValidationText = '';
            this.emailValidationSuccessful = false;

            this.$emit('input', event.target.value);

            if (event.target.value.length && this.v.email && !this.v.$error) {
                this.$emit('checkEmail', event.target.value);
            }
        },
    }
};
</script>
