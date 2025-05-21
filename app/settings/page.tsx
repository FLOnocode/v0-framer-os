"use client"

import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RequirementsProvider } from "@/context/requirements-context"
import { ResetButton } from "@/components/reset-button"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

function SettingsPage() {
  const [notifications, setNotifications] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [autoSave, setAutoSave] = useState(true)

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Paramètres</h1>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Préférences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode">Mode sombre</Label>
                <p className="text-sm text-muted-foreground">Activer le thème sombre</p>
              </div>
              <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="auto-save">Sauvegarde automatique</Label>
                <p className="text-sm text-muted-foreground">Sauvegarder automatiquement les modifications</p>
              </div>
              <Switch id="auto-save" checked={autoSave} onCheckedChange={setAutoSave} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="notifications">Notifications</Label>
                <p className="text-sm text-muted-foreground">Recevoir des notifications de progression</p>
              </div>
              <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Données</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Réinitialiser toutes les exigences à leur état initial. Cette action est irréversible.
              </p>
              <ResetButton />
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Exporter vos données de progression pour les sauvegarder ou les transférer.
              </p>
              <Button variant="outline" size="sm">
                Exporter les données
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Importer des données de progression précédemment exportées.
              </p>
              <Button variant="outline" size="sm">
                Importer des données
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>À propos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Framer Requirements Tracker v1.0.0</p>
            <p className="text-sm text-muted-foreground mt-2">
              Une application PWA pour suivre les exigences des modèles Framer pour le Marketplace.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function SettingsWrapper() {
  return (
    <RequirementsProvider>
      <SettingsPage />
    </RequirementsProvider>
  )
}
