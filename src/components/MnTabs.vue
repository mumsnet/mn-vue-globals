<template>
    <div :class="orientationClass">
        <div class="nav-tabbed">
            <button
                v-for="tab in tabs"
                :key="tab.name"
                :class="{ 'nav-tabbed__button--active': tab.isActive }"
                class="nav-tabbed__button"
                :href="tab.href"
                @click.prevent="selectTab(tab)"
            >
                {{ tab.name }}
            </button>
        </div>
        <div class="nav-tabbed__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        orientation: {
            type: String,
            default() {
                return 'horizontal';
            }
        }
    },
    data() {
        return {
            tabs: []
        };
    },
    computed: {
        orientationClass() {
            return 'nav-tabbed--' + this.orientation;
        },
    },
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = tab.name === selectedTab.name;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    @import '../variables.scss';

    .nav-tabbed {
        border-bottom: 1px solid $grey-light-2;

        &__content {
            padding: 20px 0;
        }

        &__button {
            color: $grey-light-1;
            font-size: 13px;
            line-height: 1.8;
            padding: 8px 12px;
            display: inline-block;

            &--active {
                border-bottom: 4px solid $blue-primary;
                color: $blue-primary;
                font-weight: bold;
            }

            &:hover {
                text-decoration: none;
                cursor: pointer;
            }

            &:focus {
                outline: none;
            }
        }
    }

    .nav-tabbed--vertical {
        display: flex;

        .nav-tabbed {
            display: flex;
            flex-direction: column;
            border: 0;
        }

        .nav-tabbed__button {
            max-width: 90px;
            margin-right: 30px;
            padding: 4px 0;
            text-align: left;
        }

        .nav-tabbed__button--active {
            border: 0;
            color: $body-text-color;
        }

        .nav-tabbed__content {
            padding: 4px 0;
        }
    }
</style>
