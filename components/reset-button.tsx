"use client"

import { Button } from "@/components/ui/button"
import { useRequirements } from "@/context/requirements-context"
import { useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function ResetButton() {
  const { dispatch } = useRequirements()
  const [open, setOpen] = useState(false)

  const handleReset = () => {
    dispatch({ type: "RESET_ALL" })
    setOpen(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          Réinitialiser
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Réinitialiser toutes les exigences</AlertDialogTitle>
          <AlertDialogDescription>
            Cette action réinitialisera toutes les exigences à leur état initial. Cette action est irréversible.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={handleReset}>Réinitialiser</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
