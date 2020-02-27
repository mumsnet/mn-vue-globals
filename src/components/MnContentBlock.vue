<template>
    <div
        class="card p-1"
        :class="customClass"
    >
        <div class="d-flex justify-content-between">
            <div>
                <p class="h6 text-sm theme-primary">
                    {{ title }}
                </p>
                <p
                    v-if="description.length > 0"
                    class="text-sm"
                >
                    {{ description }}
                </p>
            </div>

            <slot />
        </div>

        <slot name="content" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        },
        customClass: {
            type: String,
            default: 'mb-1'
        }
    }
};
</script>
