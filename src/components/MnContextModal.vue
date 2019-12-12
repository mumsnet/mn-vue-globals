<template>
    <mn-modal
        :show="show"
        container-class="modal-container-context"
        @close="close"
    >
        <div class="d-flex flex-column">
            <slot />
            <hr class="context-divider border-bottom">

            <button
                class="context-button"
                @click="close"
            >
                Cancel
            </button>
        </div>
    </mn-modal>
</template>

<script>
export default {
    props: {
        show: Boolean,
    },
    data() {
        return {
            showContextModal: false
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },
    }
};
</script>

<style lang="scss">
    @import '../variables.scss';

    .modal-container-context {
        position: absolute;
        top: 40%;
        right: 0;
        left:0;
        width: 250px;
        background-color: #FFFFFF;
        padding: 12px 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        margin: auto;
    }

    .red-primary {
        color: $red-primary;
    }

    .bcup .context-button {
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    .bcup .context-divider {
        margin: 10px 0;
    }
</style>
