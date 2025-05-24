interface SubmitButtonProps {
  text: string
  isLoading?: boolean
}

const SubmitButton = ({ text, isLoading }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isLoading}
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400"
  >
    {isLoading ? 'Processing...' : text}
  </button>
)

export default SubmitButton