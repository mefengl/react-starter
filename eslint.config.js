import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'

const compat = new FlatCompat()

export default antfu(
  // perfectionist
  {
    rules: {
      'import/order': 'off',
      ...perfectionist.configs['recommended-natural'].rules,
    },
  },

  {
    rules: {
      'tailwindcss/migration-from-tailwind-2': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: [
      'tsconfig.*',
    ],
  }),

  // shadcn/ui
  ...compat.config({
    ignorePatterns: [
      'src/components/ui/*',
      'src/lib/utils.ts',
      'tailwind.config.js',
    ],
  }),

  // @tanstack/react-router
  ...compat.config({
    ignorePatterns: ['routeTree.gen.ts'],
  }),
)
