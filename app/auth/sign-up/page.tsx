'use client';
import { useActionState } from 'react';
import {signUpWithEmail} from './actions'

export default function registerWithEmail() {
      const [state, formAction, isPending] = useActionState(signUpWithEmail, null);
  return (
            <div className="h-auto bg-[#233d4d] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcca46]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#fe7f2d]/20 blur-3xl rounded-full"></div>


            <div className="relative z-10 flex items-center justify-center min-h-screen p-6">

                <div className="w-full max-w-md">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">


                        <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#fcca46] to-[#fe7f2d] mb-6"></div>

                        <h1 className="text-3xl font-bold font-[--font-mono] text-white mb-2">
                            Welcome New User
                        </h1>

                        <p className="text-gray-300 font-[--font-sans] mb-8">
                            register your account to continue tracking your events.
                        </p>


                        <form action={formAction} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter you're Name"
                                className="w-full px-4 py-3 rounded-2xl font-[--font-sans] bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fcca46] transition-all duration-300"
                            />
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter you're Email Address"
                                className="w-full px-4 py-3 rounded-2xl bg-white/5 border font-[--font-sans] border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fcca46] transition-all duration-300"
                            />

                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter you're Password"
                                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 font-[--font-sans] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fe7f2d] transition-all duration-300"
                            />
                     {state?.error && (
        <div className="rounded-md px-3 py-2 text-sm text-[--accent] font-[--font-mono]">
          {state.error}
        </div>
      )}

                            <button disabled={isPending}
                                className="w-full py-3 rounded-2xl font-[--font-mono] bg-gradient-to-r from-[#fcca46] to-[#fe7f2d] text-[#233d4d] font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
  )
}
