import { useId, useState } from 'react'

import { reactQueryClient } from '@app/core/services'
import { faRankingStar } from '@fortawesome/pro-solid-svg-icons'

import { Button, FontAwesomeIcon, toast } from '@luminate/ui'

export const ShowRankButton: React.FC<{ liveSessionId: string }> = ({ liveSessionId }) => {
  const [disabled, setDisabled] = useState(false)
  const showRankToastId = useId()

  const { mutateAsync } = reactQueryClient.quiz.showStudentRank.useMutation({
    onSettled: () => {
      setTimeout(() => setDisabled(false), 5000) // Disabled for 5 seconds
    },
  })

  const onShowStudentRank = async () => {
    setDisabled(true)
    await toast.promise(
      mutateAsync({
        query: { liveSessionId },
      }),
      {
        error: 'เกิดข้อผิดพลาดในการแสดงลำดับในไลฟ์',
        loading: 'กำลังแสดงลำดับในไลฟ์...',
        success: 'แสดงลำดับในไลฟ์สำเร็จ',
      },
      { id: showRankToastId }
    )
  }

  return (
    <Button
      leftIcon={<FontAwesomeIcon icon={faRankingStar} className="w-4 h-4" />}
      variant="outline"
      onClick={onShowStudentRank}
      fullWidth
      disabled={disabled}
      className="whitespace-nowrap"
    >
      แสดงลำดับในไลฟ์
    </Button>
  )
}
