<template>
    <div>
        <label
            v-if="label"
            :class="labelClass"
            :for="id"
        >
            {{ label }}
        </label>

        <input
            :id="id"
            :type="inputType"
            :value="value"
            v-bind="$attrs"
            :class="inputClass"
            @blur="updateValue"
        >

        <slot />
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        value: [String, Number],
        id: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        labelClass: {
            type: String,
            default: ''
        },
        showLabel: {
            type: Boolean,
            default: false
        },
        inputClass: {
            type: String,
            default: 'form-control'
        },
        inputType: {
            type: String,
            default: 'text'
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('updateValue', event.target.value);
        }
    }
};
</script>
