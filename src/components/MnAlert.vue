<template>
    <div
        v-show="showAlert"
        class="alert-banner mb-2"
        :class="[alertClass]"
        role="alert"
    >
        <div class="d-flex">
            <span
                v-show="showIcon"
                class="alert-banner__icon"
                :class="iconClass"
            >
                <i
                    class="fa"
                    :class="fontAwesomeClass"
                />
            </span>

            <div>
                <p class="h5">
                    {{ title }}
                </p>

                <slot />
            </div>
        </div>

        <button
            v-if="showCloseButton"
            class="btn alert-banner__close"
            @click.prevent="showAlert = false"
        >
            <i class="fa fa-times" />
        </button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default() {
                return '';
            }
        },
        type: {
            type: String,
            default() {
                return 'info';
            }
        },
        showIcon: {
            type: Boolean,
            default() {
                return true;
            }
        },
        showCloseButton: {
            type: Boolean,
            default() {
                return false;
            }
        },
        showDismissButton: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {
            showAlert: true
        };
    },
    computed: {
        alertClass() {
            if (this.type.length) {
                return 'alert-banner--' + this.type;
            }

            return '';
        },
        iconClass() {
            return 'alert-banner__icon--' + this.type;
        },
        fontAwesomeClass() {
            if (this.type === 'success')  {
                return 'fa-check';
            } else if (this.type === 'error') {
                return 'fa-times-circle';
            } else if (this.type === 'warning') {
                return 'fa-exclamation';
            } else {
                return 'fa-question';
            }
        }
    }
};
</script>
