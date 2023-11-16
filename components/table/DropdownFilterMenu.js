export default function DropdownFilterMenu() {
  return (
    <div
      className="absolute z-10 m-0 w-48   divide-y divide-gray-100 rounded-lg bg-white shadow transition-transform ease-out dark:divide-gray-600 dark:bg-gray-700"
      //   style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);"
    >
      <ul class="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200">
        <li>
          <div class="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
            <label class="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300">
              Last day
            </label>
          </div>
        </li>
        <li>
          <div class="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
            <label class="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300">
              Last 7 days
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
}
