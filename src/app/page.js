// app/page.js
import { redirect } from 'next/navigation';

export default function Page() {
  // This will redirect the user to /home directly
  redirect('/home');
}
