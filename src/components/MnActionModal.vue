<template>
    <mn-modal
        :show="show"
        container-class="modal-container-action d-flex flex-column align-items-center justify-content-center"
        @close="close"
    >
        <i
            v-if="icon.length"
            class="fa"
            :class="icon"
        />

        <p class="h5">
            {{ message }}
        </p>
    </mn-modal>
</template>

<script>
export default {
    props: {
        show: Boolean,
        message: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            default() {
                return '';
            }
        },
    },
    data() {
        return {
            showModal: false
        };
    },
    watch: {
        show() {
            if (this.show) {
                setTimeout(() => this.$emit('close'), 1000);
            }
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
    }
};
</script>

<style>
    .modal-container-action {
        position: absolute;
        top: 30%;
        right: 0;
        left:0;
        width: 185px;
        height: 160px;
        background-color: #FFFFFF;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        margin: auto;
    }
</style>

<style lang="scss" scoped>
    @import '../variables.scss';

    .fa-eye {
        font-size: 50px;
        margin-bottom: 8px;
        color: $teal-primary;
    }
</style>
