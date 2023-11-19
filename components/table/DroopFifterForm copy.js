//https://galaxies.dev/quickwin/react-tailwind-form

import { useForm } from "react-hook-form"; //Vers 7.0.X:<input {...register('test', { required: true })} />

export default function DroopFifterForm({ onCloseForm, toFormData }) {
  const defaultData = {
    name: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: toFormData ? toFormData : defaultData,
  });

  const onSubmit = (data) => {
    // console.log("***********UsersForm/onSubmit/data=", data)
    // alert(JSON.stringify(data))
    onCloseForm(data); //з закриттям форми передаємо дані у батьківський компонент
  };
  const onCancel = () => {
    onCloseForm(null); //Передаємо дані у батьківський компонент
  };
  return (
    <div className="modal-overley">
      <form className="dataForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-nav">
          <button
            className="head-nav-button"
            type="button"
            onClick={() => reset()}
            title="Оновити ввід"
          >
            {/* <IconRefresh
              width={theme.size.formIcon}
              height={theme.size.formIcon}
              colorFill={theme.colors.formIcon}
            /> */}
          </button>
          <input className="inputSubmit" type="submit" />
          <button
            className="head-nav-button"
            type="button"
            onClick={onCancel}
            title="Вийти без збереження"
          >
            {/* <IconCancel
              width={theme.size.formIcon}
              height={theme.size.formIcon}
              colorFill={theme.colors.formIcon}
            /> */}
          </button>
          <button
            className="rounded-full border border-gray-400 hover:bg-tabIconHovBgCol dark:hover:bg-tabIconHovBgColD"
            onClick={onCancel}
            title="Вийти без збереження"
          >
            <svg
              class="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="formBody">
          <div
            className="inputBody"
            style={{ weight: "250px", margin: "0 10px" }}
          >
            <label className="label">Назва категорії</label>
            <input
              className="input"
              {...register("name", { maxLength: 50 })}
              required
            />
            <div className="errorMsg">
              {errors.name?.type === "maxLength" && "Назва >50симв."}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
