import React from 'react'

export const Pagination = ({ meta, handlePageLink }) => {

    return (
        <div className="flex items-cente justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

            {/* <pre>
                {JSON.stringify(meta, undefined, 2)}
            </pre> */}

            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    onClick={(e) => handlePageLink(e, meta?.links[0].url)}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:cursor-pointer"
                >
                    Previous
                </a>
                <a
                    onClick={(e) => handlePageLink(e, meta?.links[meta.links.length - 1].url)}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:cursor-pointer"
                >
                    Next
                </a>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between md:justify-around">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{meta?.from}</span> to <span className="font-medium">{meta?.to}</span> of{' '}
                        <span className="font-medium">{meta?.total}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        {
                            meta?.links.map((link, index) => (
                                <a key={index}
                                    onClick={(e) => handlePageLink(e, link.url)}
                                    href="#"
                                    aria-current="page"
                                    className={`relative z-10 inline-flex items-center border px-4 py-2 text-sm font-semibold focus:z-20 hover:cursor-pointer

                                    ${link?.active ?
                                            "bg-indigo-600 hover:text-black focus-visible:outline-indigo-600 text-white" :
                                            "hover:bg-gray-200"
                                        }

                                    ${index === 0 ? "rounded-md hover:text-black" : ""}
                                    ${index === meta?.links?.length - 1 ? "rounded-md" : ""}


                                `}

                                    dangerouslySetInnerHTML={{ __html: link?.label }}
                                >
                                </a>
                            ))
                        }
                    </nav>
                </div>
            </div>
        </div>
    )
}
