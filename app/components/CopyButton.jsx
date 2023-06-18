import { useState } from "react"
import {
  HiOutlineClipboardDocumentList,
  HiOutlineClipboardDocumentCheck,
} from "react-icons/hi2"

const CopyButton = ({ accountNumber }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber)
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    } catch (error) {
      console.error("Failed to copy account number: ", error)
    }
  }

  return (
    <button
      className="body-regular-md bg-primary-300 hover:bg-light-300 text-light-300 hover:text-primary-400 py-3 px-2 rounded-full inline-flex justify-center items-center w-[220px]"
      onClick={handleCopy}
    >
      {isCopied ? (
        <>
          <HiOutlineClipboardDocumentCheck className="mr-1 h-5 w-5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <HiOutlineClipboardDocumentList className="mr-1 h-5 w-5" />
          <span>Copy No. Rekening</span>
        </>
      )}
    </button>
  )
}

export default CopyButton
