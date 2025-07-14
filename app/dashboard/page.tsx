'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function DashboardPage() {
    const { user } = useSelector((state: RootState) => state.auth);

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Welcome back, {user?.name || 'User'}!
                    </h1>
                    <p className="text-gray-400">Here&apos;s what&apos;s happening with your account today.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Sample Cards */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">Quick Stats</h3>
                        <p className="text-gray-400 text-sm">Your application metrics</p>
                        <div className="mt-4">
                            <div className="text-2xl font-bold text-blue-400">0</div>
                            <div className="text-sm text-gray-500">Total Items</div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">Recent Activity</h3>
                        <p className="text-gray-400 text-sm">No recent activity</p>
                        <div className="mt-4">
                            <div className="text-2xl font-bold text-green-400">✓</div>
                            <div className="text-sm text-gray-500">All Good</div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                        <h3 className="text-lg font-semibold text-white mb-2">User Info</h3>
                        <p className="text-gray-400 text-sm">Account details</p>
                        <div className="mt-4">
                            <div className="text-sm text-white">{user?.email}</div>
                            <div className="text-sm text-gray-500">Role: {user?.role}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Getting Started</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">🚀 Next Steps</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>• Customize your profile</li>
                                    <li>• Explore the features</li>
                                    <li>• Invite team members</li>
                                    <li>• Set up integrations</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-2">📚 Resources</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>• Documentation</li>
                                    <li>• API Reference</li>
                                    <li>• Support Center</li>
                                    <li>• Community Forum</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}