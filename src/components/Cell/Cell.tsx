import React, { FC } from 'react'
import Cell from 'abstract/Cell'
import { CellEl } from 'atoms'

const CellComp: FC<{ cell: Cell }> = ({ cell }) => (
	<CellEl className={cell.classes} />
)

export default CellComp
