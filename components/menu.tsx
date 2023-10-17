import { Inbox, MailCheck } from "lucide-react";

export default function Menu() {
  let count = 0;

  return (
    <>
      <div className="flex flex-col px-2 py-3 ml-0 mb-3 mt-2 border-b border-b-[#6363634d]">
        <h5 className="text-xs text-[#b5b6ba] ml-2 uppercase">Inboxes</h5>
        <div className="flex flex-row items-center justify-between gap-8 mt-3 border border-[#6363634d] rounded-md p-2 text-sm">
          <div className="flex flex-row items-center gap-2 ml-1">
            <Inbox size={20}/>
            <span>Notes</span>
          </div>
          <div>
            <span className="mr-6">{count}</span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-8 justify-between mb-3 mt-1 p-2 text-sm">
          <div className="flex flex-row items-center gap-2 ml-1">
            <MailCheck size={20}/>
            <span>Tasks</span>
          </div>
          <div>
            <span className="mr-6">{count}</span>
          </div>
        </div>
      </div>
      <div className="px-2 py-3">
        <h5 className="text-xs text-[#b5b6ba] uppercase ml-2">Pinboards</h5>
        <div className="mt-4">
          <ul className="text-sm flex flex-col gap-2.5 px-2">
            <li className="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="-rotate-90 relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>💎</span>
              <span>Title 1</span>
            </li>
            <li className="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="-rotate-90 relative top-[1px] ml-1 h-3 w-3 transition duration-200"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <span>🥎️</span>
              <span>Title 2</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
