/**
 * Theme Documentation Component
 *
 * This component provides documentation about the theme system.
 * It explains how the theme system works and how to use it.
 */
export function ThemeDocumentation() {
  return (
    <div className="p-6 bg-white dark:bg-[#1e2537] rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Theme System Documentation
      </h2>

      <div className="space-y-4">
        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Overview
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            The Trolla dashboard uses a theme system that supports both light
            and dark modes. The theme can be toggled using the theme toggle
            button in the header.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            How It Works
          </h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              The theme system uses the{' '}
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                next-themes
              </code>{' '}
              library to manage themes.
            </li>
            <li>
              Themes are persisted in local storage so they're remembered
              between visits.
            </li>
            <li>
              The system respects the user's system preference by default.
            </li>
            <li>CSS variables are used to define colors for both themes.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Using the Theme System
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            To make components theme-aware, use Tailwind's dark mode variant:
          </p>
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
            <code>{`<div className="bg-white dark:bg-[#1e2537]">
  <p className="text-gray-900 dark:text-white">
    This text adapts to the current theme
  </p>
</div>`}</code>
          </pre>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Theme Variables
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            The theme system defines CSS variables for colors in{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
              globals.css
            </code>
            :
          </p>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                --background
              </code>
              : Page background color
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                --foreground
              </code>
              : Default text color
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                --card
              </code>
              : Card background color
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">
                --muted
              </code>
              : Muted text color
            </li>
            <li>And many more for different UI elements</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
