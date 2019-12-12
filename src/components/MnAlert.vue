<template>
    <div
        v-show="showAlert"
        class="banner mb-2"
        :class="[alertClass, arrowClass]"
        role="alert"
    >
        <div class="d-flex">
            <span
                v-show="showIcon"
                class="banner__icon"
                :class="iconClass"
            >
                <i
                    class="fa"
                    :class="fontAwesomeClass"
                />
            </span>

            <p class="h5">
                {{ title }}
            </p>

            <button
                v-show="showDismissButton"
                class="btn banner__close"
                @click.prevent="showAlert = false"
            >
                <i class="fa fa-times" />
            </button>
        </div>

        <slot />
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
                return 'default';
            }
        },
        arrow: {
            type: String,
            default() {
                return '';
            }
        },
        showIcon: {
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
                return 'banner--' + this.type;
            }

            return '';
        },
        arrowClass() {
            if (this.arrow.length) {
                return 'banner--' + this.arrow;
            }

            return '';
        },
        iconClass() {
            return 'banner__icon--' + this.type;
        },
        fontAwesomeClass() {
            if (this.type === 'success')  {
                return 'fa-check';
            } else {
                return 'fa-exclamation';
            }
        }
    }
};
</script>

<style lang="scss">
    @import '../variables.scss';
    @import '../mixins.scss';

    // TODO: Move global styles
    .banner {
        position: relative;
        color: $body-text-color;
        border-radius: 0;
        padding: 15px;


        &__close {
            position: absolute;
            top: 0;
            right: 0;
            background-color: transparent;
        }

        &__icon {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 25px;
            height: 25px;
            border-radius: 25px;
            margin-right: 10px;
            color: #FFFFFF;

            &--default {
                background-color: $body-text-color;
            }

            &--info {
                background-color: $orange-primary;
            }

            &--success {
                background-color: $green-primary;
            }

        }

        &--default {
            background-color: $grey-light-3;
            border: 1px solid $grey-light-1;

            &.banner--arrow {
                @include standard-triangle(
                    $width: 20px,
                    $top: 100%,
                    $left: 20px,
                    $rotate: 180deg,
                    $arrow-border: true,
                    $color: $grey-light-1,
                    $color-2: $grey-light-3
                );
            }
        }

        &--info {
            background-color: #FFF7ED;
            border: 1px solid $orange-primary;

            &.banner--arrow {
                @include standard-triangle(
                    $width: 20px,
                    $top: 100%,
                    $left: 20px,
                    $rotate: 180deg,
                    $arrow-border: true,
                    $color: $orange-primary,
                    $color-2: #FFF7ED
                );
            }
        }

        &--success {
            background-color: #E9FAEA;
            border: 1px solid $green-primary;

            &.banner--arrow {
                @include standard-triangle(
                    $width: 20px,
                    $top: 100%,
                    $left: 20px,
                    $rotate: 180deg,
                    $arrow-border: true,
                    $color: $green-primary,
                    $color-2: #E9FAEA
                );
            }
        }
    }
</style>
