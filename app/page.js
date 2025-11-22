import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"; // Asegúrate de tener este componente
import { Button } from "@/components/ui/button"; // Asegúrate de tener este componente

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="mb-4 w-[500px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Iniciar sesión</CardTitle>
          <CardDescription className="text-center">
            Por favor, introduce tus credenciales para iniciar sesión.
          </CardDescription>
        </CardHeader>

        <form>
          <CardContent className="space-y-6 text-left p-2">
            <div>
              <Label htmlFor="email" className="block pb-3 px-2">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                autoComplete="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Introduce una dirección de email válida (ej: usuario@dominio.com)"
                className="py-2"
              />
            </div>
            <div>
              <Label htmlFor="password" className="block pb-3 px-2">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                minLength={5}
                pattern=".{5,}"
                title="La contraseña debe tener al menos 5 caracteres"
                autoComplete="current-password"
                className="py-2"
              />
            </div>
          </CardContent>
          <CardFooter className="pt-6">
            <Button
              type="submit"
              className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar sesión
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
