<template>
    <div :class="wrapperClass">
        <input
            :id="id"
            :class="inputClass"
            type="radio"
            :value="value"
            :name="name"
            :checked="checked"
            @change="change"
        >

        <label
            :class="labelClass"
            :for="id"
        >
            {{ labelText }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'MnInputRadio',
    props: {
        name: {
            type: String,
            required: true
        },
        value: {
            required: true
        },
        labelText: {
            type: String,
            required: true
        },
        id: {
            type: String,
            default: ''
        },
        wrapperClass: {
            type: String,
            default: 'form-check mb-2'
        },
        inputClass: {
            type: String,
            default: 'form-check-input'
        },
        labelClass: {
            type: String,
            default: 'form-check-label text-sm'
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        change(e) {
            this.$emit('change', e);
        }
    }
};
</script>
