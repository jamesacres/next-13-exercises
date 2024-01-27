'use client';
import {useRouter} from 'next/navigation';
import React from 'react';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const router = useRouter();
  const toastContext = React.useContext(ToastContext);
  return (
    <main>
      <form onSubmit={(e) => {
        e.preventDefault();
        router.push('/exercises/02-flash-messages');
        toastContext.createToast('Thank You!', 'success')
    }}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
