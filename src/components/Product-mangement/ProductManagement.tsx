"use client";

import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, ShoppingCart, Zap, Loader2, Image as ImageIcon, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: string;
  name: string;
  description?: string | null;
  price: number;
  photoUrl?: string | null;
};

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const [form, setForm] = useState({ name: "", description: "", price: "", file: null as File | null });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product`);
      const data = await res.json();
      setProducts(data || []);
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchProducts(); }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ name: "", description: "", price: "", file: null });
    setShowModal(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, description: p.description || "", price: String(p.price), file: null });
    setShowModal(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/product/${id}`, { method: "DELETE" });
      fetchProducts();
    } catch (err) { console.error(err); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData();
    fd.append("data", JSON.stringify({ name: form.name, description: form.description, price: Number(form.price) }));
    if (form.file) fd.append("file", form.file);

    try {
      const url = editing ? `${process.env.NEXT_PUBLIC_BASE_API}/product/${editing.id}` : `${process.env.NEXT_PUBLIC_BASE_API}/product`;
      await fetch(url, { method: editing ? "PATCH" : "POST", body: fd });
      setShowModal(false);
      fetchProducts();
    } catch (err) { console.error(err); } finally { setSubmitting(false); }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation/Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tighter">INVENTORY</h1>
            <div className="h-1 w-20 bg-[#14b8a6] mt-1" />
          </div>
          <Button 
            onClick={openCreate} 
            className="bg-[#14b8a6] hover:bg-[#0d9488] text-white rounded-none px-8 font-bold uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(20,184,166,0.2)]"
          >
            <Plus className="mr-2 h-5 w-5" /> Add New
          </Button>
        </div>

        {/* Product Grid - 3 items per row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading && products.map((p) => (
            <Card key={p.id} className="relative border-2 border-slate-100 shadow-none hover:border-[#14b8a6]/30 transition-all flex flex-col group">
              
              {/* Image Area */}
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                {p.photoUrl ? (
                  <img src={p.photoUrl} alt={p.name} className="object-cover w-full h-full" />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-300">
                    <ImageIcon size={40} />
                  </div>
                )}
                
                {/* Product Management Actions (Dots Menu) */}
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-teal-800/80 backdrop-blur-sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => openEdit(p)} className="cursor-pointer">
                        <Pencil className="mr-2 h-4 w-4" /> Edit Product
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDelete(p.id)} className="text-red-600 cursor-pointer">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete Product
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <Badge className="absolute bottom-0 right-0 bg-slate-900 text-white rounded-none px-4 py-1 text-base font-mono">
                  ${p.price}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{p.name}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                  {p.description || "No description provided for this item."}
                </p>
              </CardContent>

              {/* Your Requested Buttons Style */}
              <CardFooter className="p-6 pt-0 grid grid-cols-2 gap-3">
                <Button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold h-12 rounded-sm uppercase text-xs tracking-tighter">
                  Add To Cart
                </Button>
                <Button className="bg-[#14b8a6] hover:bg-[#0d9488] text-white font-bold h-12 rounded-sm uppercase text-xs tracking-tighter">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Create/Update Modal */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="sm:max-w-[500px] border-t-8 border-t-[#14b8a6]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black uppercase tracking-tight">
                {editing ? "Update Product" : "New Listing"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 py-4">
              <div className="space-y-1">
                <Label htmlFor="name" className="text-xs font-bold uppercase text-slate-500">Product Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="rounded-none border-slate-200 focus:border-[#14b8a6]" required />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="price" className="text-xs font-bold uppercase text-slate-500">Price (USD)</Label>
                <Input id="price" type="number" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="rounded-none border-slate-200" required />
              </div>

              <div className="space-y-1">
                <Label htmlFor="desc" className="text-xs font-bold uppercase text-slate-500">Description</Label>
                <Textarea id="desc" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="rounded-none resize-none" rows={3} />
              </div>

              <div className="space-y-1">
                <Label className="text-xs font-bold uppercase text-slate-500">Cover Image</Label>
                <Input type="file" onChange={(e) => setForm({...form, file: e.target.files ? e.target.files[0] : null})} className="rounded-none cursor-pointer" />
              </div>

              <DialogFooter className="gap-2 sm:gap-0">
                <Button type="button" variant="ghost" onClick={() => setShowModal(false)} className="rounded-none uppercase font-bold text-xs">Cancel</Button>
                <Button type="submit" className="bg-[#14b8a6] hover:bg-[#0d9488] rounded-none uppercase font-bold px-8" disabled={submitting}>
                  {submitting ? <Loader2 className="animate-spin h-4 w-4" /> : "Confirm & Save"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductManagement;