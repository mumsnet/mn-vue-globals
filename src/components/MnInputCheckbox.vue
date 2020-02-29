<template>
    <div
        :class="wrapperClass"
    >
        <input
            :id="id"
            :class="inputClass"
            :name="name"
            type="checkbox"
            :value="value"
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
    name: 'MnInputCheckbox',
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
        }
    },
    methods: {
        change(e) {
            this.$emit('change', e);
        }
    }
};
</script>
