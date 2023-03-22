"use client";

import {
  Command,
  FileMinus,
  FilePlus,
  FileText,
  Search,
  Zap,
} from "lucide-react";

export default function InvoicesSearch() {
  return (
    <div className="flex w-full max-w-3xl items-center justify-center text-white">
      <div className="w-full">
        <div className="relative z-10 mb-4 flex items-center gap-3 rounded-lg border border-solid border-[#35333c] bg-[#28272f] py-3 px-6 text-[#94959d]">
          <label htmlFor="search" aria-label="Search">
            <Search size={20} />
          </label>

          <input
            className="peer w-full bg-transparent outline-none"
            id="search"
            type="text"
            placeholder="Search"
            required
          />

          <div className="duration-50 ml-auto flex gap-2 opacity-0 transition-opacity peer-valid:opacity-100">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] text-[#94959d]">
              <Command size={16} />
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] text-[#94959d]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Enter key"
              >
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </div>
          </div>

          <div
            className="duration-50 absolute top-0 left-0 -z-10 h-full w-full rounded-lg border border-indigo-600 opacity-0 shadow-[0_0_10px_0] shadow-indigo-600 transition-opacity peer-focus:opacity-100"
            aria-hidden="true"
          ></div>
        </div>

        <div className="rounded-lg border border-solid border-[#35333c] bg-[#28272f] py-4">
          <div className="mb-4 px-3">
            <div className="mb-3 px-3 font-semibold text-[#94959d]">
              Recently viewed
            </div>

            <ul>
              <li className="mb-2">
                <a
                  className="flex rounded-lg p-3 outline-none transition-colors duration-100 hover:bg-[#363441] focus-visible:bg-[#363441]"
                  href="#"
                >
                  <div className="mr-3 text-[#94959d]">
                    <FileText size={20} className="mt-[0.125rem]" />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center font-semibold">
                      <span className="mr-2 text-[#cdccd4]">Invoice #2039</span>

                      <span className="rounded-md bg-yellow-200 py-1 px-[0.675rem] text-sm leading-none text-[#28272f]">
                        Sent
                      </span>
                    </div>

                    <div className="text-sm text-[#94959d]">
                      Invoices / Website redesign
                    </div>
                  </div>
                </a>
              </li>

              <li className="mb-2">
                <a
                  className="flex rounded-lg p-3 outline-none transition-colors duration-100 hover:bg-[#363441] focus-visible:bg-[#363441]"
                  href="#"
                >
                  <div className="mr-3 text-[#94959d]">
                    <FileText size={20} className="mt-[0.125rem]" />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center font-semibold">
                      <span className="mr-2 text-[#cdccd4]">Invoice #2041</span>

                      <span className="rounded-md bg-[#d8d7e8] py-1 px-[0.675rem] text-sm leading-none text-[#28272f]">
                        Draft
                      </span>
                    </div>

                    <div className="text-sm text-[#94959d]">
                      Invoices / Icon design
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-solid border-[#35333c] px-3 pt-4">
            <div className="mb-6 px-3 font-semibold text-[#94959d]">
              Common actions
            </div>

            <ul>
              <li className="mb-4">
                <a
                  className="group flex items-center gap-3 rounded-lg px-3 outline-none transition-colors duration-100"
                  href="#"
                >
                  <div className="text-[#94959d]">
                    <FilePlus size={20} />
                  </div>

                  <div className="font-semibold text-[#cdccd4] transition-colors duration-100 group-hover:text-white group-focus-visible:text-white">
                    Create invoice
                  </div>

                  <div className="ml-auto flex gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]">
                      <Command size={16} />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] font-semibold text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]">
                      N
                    </div>
                  </div>
                </a>
              </li>

              <li className="mb-4">
                <a
                  className="group flex items-center gap-3 rounded-lg px-3 outline-none transition-colors duration-100"
                  href="#"
                >
                  <div className="text-[#94959d]">
                    <Zap size={20} />
                  </div>

                  <div className="font-semibold text-[#cdccd4] transition-colors duration-100 group-hover:text-white group-focus-visible:text-white">
                    Schedule invoice
                  </div>

                  <div className="ml-auto flex gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]">
                      <Command size={16} />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] font-semibold text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]">
                      S
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  className="group flex items-center gap-3 rounded-lg px-3 outline-none transition-colors duration-100"
                  href="#"
                >
                  <div className="text-[#94959d]">
                    <FileMinus size={20} />
                  </div>

                  <div className="font-semibold text-[#cdccd4] transition-colors duration-100 group-hover:text-white group-focus-visible:text-white">
                    Delete invoice
                  </div>

                  <div className="ml-auto flex gap-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]"
                      title="Command key"
                    >
                      <Command size={16} />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#35333c] font-semibold text-[#94959d] transition-colors duration-100 group-hover:bg-[#363441] group-hover:text-[#cdccd4] group-focus-visible:bg-[#363441] group-focus-visible:text-[#cdccd4]">
                      D
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
