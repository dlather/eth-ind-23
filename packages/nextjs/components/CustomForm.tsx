import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { useDescription, useEnumValues, useReqDescription, useTsController } from "@ts-react/form";
import dayjs from "dayjs";
import { MultiSelect, Option } from "react-multi-select-component";
import { IDPointsType, IdNameType } from "~~/utils/common/ProviderTemplate";

const onlyDigitsRegex = new RegExp("^[0-9]*$");

export function TextField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label, placeholder } = useReqDescription();

  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          onChange={e => onChange(e.target.value)}
          value={value ? value : ""}
          placeholder={placeholder}
          type="text"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function NonNegativeBigIntField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<bigint>();
  const { label, placeholder } = useReqDescription();

  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          onChange={e => (onlyDigitsRegex.test(e.target.value) ? onChange(BigInt(e.target.value)) : null)}
          value={value ? value.toString() : 0n.toString()}
          placeholder={placeholder}
          type="text"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function NonNegativeBigIntFieldArray({ options }: { options: IdNameType[] }) {
  const {
    field: { onChange },
    error,
  } = useTsController<IDPointsType[]>();
  const { label } = useReqDescription();
  const [idPointsMap, setIdPointsMap] = useState<Record<string, bigint>>({});
  useEffect(() => {
    const initialIdPointsMap: Record<string, bigint> = {};
    options.forEach(item => {
      initialIdPointsMap[item.id] = 0n;
    });
    setIdPointsMap(initialIdPointsMap);
  }, [options]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, op: IdNameType) => {
    setIdPointsMap({ ...idPointsMap, [op.id]: BigInt(e.target.value) });
    onChange(
      Object.keys(idPointsMap).map(k => ({ id: k, points: k === op.id ? BigInt(e.target.value) : idPointsMap[k] })),
    );
  };
  return (
    Object.keys(idPointsMap).length !== 0 && (
      <>
        <div className="join-item mt-2" key={label}>
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
          {(options ?? []).map(op => (
            <div className="join-item mt-2" key={op.id}>
              <label className="label">
                <span className="label-text">{op.name}</span>
              </label>
              <input
                onChange={e => (onlyDigitsRegex.test(e.target.value) ? handleChange(e, op) : null)}
                value={idPointsMap[op.id].toString()}
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt">{error && error.errorMessage}</span>
              </label>
            </div>
          ))}
        </div>
      </>
    )
  );
}
export function TextAreaField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label, placeholder } = useReqDescription();

  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <textarea
          onChange={e => onChange(e.target.value)}
          value={value ? value : ""}
          className="textarea textarea-bordered h-28 w-full max-w-xs"
          placeholder={placeholder}
        ></textarea>
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function NumberField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label, placeholder } = useReqDescription();

  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <input
          onChange={e => onChange(e.target.value)}
          value={value ? value : ""}
          placeholder={placeholder}
          type="number"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function DateTimeField() {
  const {
    field: { onChange, value },
    error,
  } = useTsController<string>();
  const { label } = useDescription();
  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <MobileDateTimePicker
          sx={{
            bgcolor: "background.paper",
            borderRadius: 0,
          }}
          className="w-full join-item"
          value={dayjs(value)}
          disablePast={true}
          onChange={val => {
            onChange(dayjs(val).toISOString());
          }}
          label={null}
          formatDensity="spacious"
        />
      </div>

      {error && error.errorMessage}
    </>
  );
}

export function CustomDateTimePicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: dayjs.Dayjs | null;
  onChange: React.Dispatch<React.SetStateAction<dayjs.Dayjs | null>>;
}) {
  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <MobileDateTimePicker
          sx={{
            bgcolor: "background.paper",
            borderRadius: 0,
          }}
          className="w-full join-item"
          value={value}
          onAccept={val => onChange(val)}
          disablePast={true}
          label={null}
          formatDensity="spacious"
        />
      </div>
    </>
  );
}

export function Select() {
  const options = useEnumValues();
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();
  return (
    <div className="join-item my-2">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        value={field.value ? field.value : "none"}
        onChange={e => {
          field.onChange(e.target.value);
        }}
        className="select w-full join-item select-bordered"
      >
        {!field.value && <option value="none">{placeholder}</option>}
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <span>{error?.errorMessage && error.errorMessage}</span>
    </div>
  );
}

export function Checkbox() {
  const {
    field: { onChange, value },
  } = useTsController<boolean>();
  const { label, placeholder } = useDescription();
  return (
    <div className="join-item mt-2">
      <label className="label cursor-pointer">
        <div>
          <div className="label-text font-semibold">{label}</div>
          <span className="label-text">{placeholder}</span>
        </div>
        <input
          type="checkbox"
          onChange={e => onChange(e.target.checked)}
          checked={value ? value : false}
          className="checkbox checkbox-md checkbox-primary"
        />
      </label>
    </div>
  );
}

export function MultiCheckbox({ options }: { options: Option[] }) {
  const {
    field: { onChange, value },
    error,
  } = useTsController<Option[]>();
  const { label } = useDescription();
  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <MultiSelect options={options} value={value ?? []} onChange={onChange} labelledBy="Select" />
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function MultiCheckboxWithSIngleSelect({ options }: { options: Option[] }) {
  const {
    field: { onChange, value },
    error,
  } = useTsController<Option>();
  const { label } = useDescription();
  return (
    <>
      <div className="join-item mt-2">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>
        <MultiSelect
          options={options}
          hasSelectAll={false}
          value={value === undefined ? [] : [value]}
          onChange={(v: any) => {
            console.log(v);
            onChange(v);
          }}
          labelledBy="Select"
        />
        <label className="label">
          <span className="label-text-alt">{error && error.errorMessage}</span>
        </label>
      </div>
    </>
  );
}

export function FormContainerCompact({
  onSubmit,
  children,
  loading,
}: {
  onSubmit: () => void;
  children: ReactNode;
  loading?: boolean;
}) {
  return (
    <form className="form-control join w-full mx-auto my-0 max-w-md" onSubmit={onSubmit}>
      {children}
      <button className="btn w-full no-animation btn-primary my-0" type="submit">
        {loading && (
          <>
            <span className="loading loading-spinner"></span>
            loading
          </>
        )}
        Submit
      </button>
    </form>
  );
}

export function FormContainer({
  onSubmit,
  children,
  loading,
  formLabel,
}: {
  onSubmit: () => void;
  children: ReactNode;
  loading?: boolean;
  formLabel?: string;
}) {
  return (
    <form className="form-control join w-full mx-auto my-4 max-w-xs" onSubmit={onSubmit}>
      {formLabel ? <span className="font-medium">{formLabel}</span> : null}
      {children}
      <button className="btn w-full no-animation btn-primary my-6" type="submit">
        {loading && (
          <>
            <span className="loading loading-spinner"></span>
            loading
          </>
        )}
        Submit
      </button>
    </form>
  );
}
