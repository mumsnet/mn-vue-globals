<template>
    <div>
        <label
            v-if="labelText"
            :class="labelClass"
            :for="id"
        >
            {{ labelText }}
        </label>

        <input
            :id="id"
            :type="fieldType"
            :value="value"
            v-bind="$attrs"
            :class="inputClass"
            :placeholder="placeholderText"
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
        labelText: {
            type: String,
            default: ''
        },
        labelClass: {
            type: String,
            default: 'text-small'
        },
        showLabel: {
            type: Boolean,
            default: false
        },
        inputClass: {
            type: String,
            default: 'form-control'
        },
        fieldType: {
            type: String,
            default: 'text'
        },
        placeholderText: {
            type: String,
            default: ''
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('updateValue', event.target.value);
        }
    }
};
</script>
