import RootLayout from './layout';
import { Firstpage } from '../components/firstpage';


export default function Home() {
  return (
    <RootLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Firstpage />
      </main>
    </RootLayout>
  )
}
