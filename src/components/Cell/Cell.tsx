import React, { FC } from 'react'
import { CellEl } from 'atoms'

const CellComp: FC<{ className: string }> = ({ className }) => (
	<CellEl className={className} />
)

export default CellComp
