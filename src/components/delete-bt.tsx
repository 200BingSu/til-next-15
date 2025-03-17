"use client";
import deleteAction from "@/actions/delete-action";
import style from "@/components/delete-bt.module.css";
import { GoodDataType } from "@/types/types/good-type";
import { useActionState, useEffect, useRef } from "react";

export default function DeleteBtn({ id }: GoodDataType) {
  const [state, formAction, isPending] = useActionState(deleteAction, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state && !state.status) {
      alert(state.message);
    }
  }, [state]);
  return (
    <>
      <form action={formAction} className={style.container} ref={formRef}>
        <input type="hidden" name="goodId" value={id} readOnly hidden />
        {isPending ? (
          <div>Deleting...</div>
        ) : (
          <button
            className={style.delete_btn}
            onClick={() => {
              formRef.current?.requestSubmit();
            }}
          >
            Delete
          </button>
        )}
      </form>
    </>
  );
}
