<template>
    <transition name="modal">
        <div
            v-show="show"
            class="modal-mask"
            @click="close"
        >
            <div
                v-scroll-lock="scrollLockOnOpen"
                :class="containerClass"
                @click.stop
            >
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: Boolean,
        scrollLock: {
            type: Boolean,
            default: true
        },
        containerClass: {
            type: String,
            default() {
                return 'modal-container-responsive';
            }
        }
    },
    data() {
        return {
            showModal: false
        };
    },
    computed: {
        scrollLockOnOpen() {
            return this.show && this.scrollLock;
        }
    },
    mounted() {
        document.addEventListener('keydown', (e) => {
            if (this.show && e.key === 'Escape') {
                this.close();
            }
        });
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
        z-index: 40;
    }

    .modal-container-responsive {
        position: relative;
        width: 100%;
        min-height: 100vh;
        padding: 20px 30px;
        background-color: #fff;
        transition: all .3s ease;

        @media (min-width: $min-width-lg) {
            width: 800px;
            min-height: 0;
            margin: 40px auto;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        }
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>

