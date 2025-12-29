"use client";

import React, { useEffect, useState } from "react";

type Hero = {
    id: string;
    name: string;
    title: string;
    description?: string | null;
    videoUrl?: string | null;
};

const tryFetch = async (path: string) => {
    try {
        const res = await fetch(path);
        if (!res.ok) return null;
        return await res.json();
    } catch {
        return null;
    }
};

const AdminBannersPage: React.FC = () => {
    const [items, setItems] = useState<Hero[]>([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState<Hero | null>(null);
    const [form, setForm] = useState({ name: "", title: "", description: "", videoUrl: "" });

    const fetchItems = async () => {
        setLoading(true);
        try {
            // try common endpoints
            let data = await tryFetch(process.env.NEXT_PUBLIC_BASE_API + "/api/heroes");
            if (!data) data = await tryFetch(process.env.NEXT_PUBLIC_BASE_API + "/api/hero");
            setItems(data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const openCreate = () => {
        setEditing(null);
        setForm({ name: "", title: "", description: "", videoUrl: "" });
        setShowModal(true);
    };

    const openEdit = (h: Hero) => {
        setEditing(h);
        setForm({ name: h.name, title: h.title, description: h.description ?? "", videoUrl: h.videoUrl ?? "" });
        setShowModal(true);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this banner?")) return;
        try {
            const res = await fetch(`/api/heroes/${id}`, { method: "DELETE" });
            if (!res.ok) {
                // try alternate path
                await fetch(`/api/hero/${id}`, { method: "DELETE" });
            }
            fetchItems();
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const payload = { name: form.name, title: form.title, description: form.description, videoUrl: form.videoUrl };
        try {
            if (editing) {
                const res = await fetch(`/api/heroes/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
                if (!res.ok) await fetch(`/api/hero/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
            } else {
                const res = await fetch(`/api/heroes`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
                if (!res.ok) await fetch(`/api/hero`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
            }
            setShowModal(false);
            fetchItems();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Banners / Heroes</h1>
                <button className="px-4 py-2 bg-teal-600 text-white rounded" onClick={openCreate}>New Banner</button>
            </div>

            {loading && <div>Loading...</div>}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((it) => (
                    <div key={it.id} className="border rounded p-3 flex flex-col gap-3">
                        <div className="h-40 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                            {it.videoUrl ? (
                                // show video thumbnail if it's a video URL or the url itself
                                <video src={it.videoUrl} className="w-full h-full object-cover" muted playsInline />
                            ) : (
                                <div className="text-sm text-gray-500">No media</div>
                            )}
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{it.title}</h3>
                            <p className="text-sm text-gray-600">{it.name}</p>
                            <p className="text-sm text-gray-500 mt-1">{it.description}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-yellow-500 rounded text-white" onClick={() => openEdit(it)}>Edit</button>
                            <button className="px-3 py-1 bg-red-600 rounded text-white" onClick={() => handleDelete(it.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded p-6 w-full max-w-lg">
                        <h2 className="text-lg font-bold mb-4">{editing ? "Edit Banner" : "Create Banner"}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <input required value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} placeholder="Name" className="border px-3 py-2 rounded" />
                            <input required value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} placeholder="Title" className="border px-3 py-2 rounded" />
                            <textarea value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} placeholder="Description" className="border px-3 py-2 rounded" />
                            <input value={form.videoUrl} onChange={(e) => setForm((s) => ({ ...s, videoUrl: e.target.value }))} placeholder="Video URL" className="border px-3 py-2 rounded" />

                            <div className="flex justify-end gap-2 mt-2">
                                <button type="button" className="px-4 py-2 rounded border" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-teal-600 text-white rounded">{editing ? "Update" : "Create"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminBannersPage;
