export default function Modal({
  text,
  title,
  success,
  close,
}: {
  text: string;
  title: string;
  success: boolean;
  close?: true;
}) {
  return (
    <div className="modal">
      <div
        className={success ? "modal-content-success" : "modal-content-error"}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl">{title}</h2>
        </div>
        <div className="text-base">{text}</div>
        {close ? (
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="btn-white w-full"
          >
            Close
          </button>
        ) : null}
      </div>
    </div>
  );
}
