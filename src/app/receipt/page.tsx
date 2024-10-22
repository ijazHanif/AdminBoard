'use client';
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button"; // For add/edit/delete buttons
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"; // For modal
import { Input } from "@/components/ui/input";
import { receiptData as initialReceiptData } from "@/data/Receipt";
import { Receipt } from "@/types/Type";
import { Typography } from "@/components/ui/Typography";

const Page = () => { // Renamed from 'page' to 'Page'
  const [receipts, setReceipts] = useState<Receipt[]>(initialReceiptData);
  const [editReceipt, setEditReceipt] = useState<Receipt | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for adding or editing receipt
  const handleSave = (newReceipt: Receipt) => {
    if (editReceipt) {
      setReceipts((prev) =>
        prev.map((receipt) =>
          receipt.id === editReceipt.id ? newReceipt : receipt
        )
      );
    } else {
      setReceipts((prev) => [...prev, newReceipt]);
    }
    setIsModalOpen(false);
    setEditReceipt(null);
  };

  // Handler for deleting receipt
  const handleDelete = (id: string) => {
    setReceipts((prev) => prev.filter((receipt) => receipt.id !== id));
  };

  // Handler for opening edit modal
  const openEditModal = (receipt: Receipt) => {
    setEditReceipt(receipt);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Typography variant="h1" className="mb-4 text-2xl font-semibold">
        Bank Management
      </Typography>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead className="text-left">Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-left">Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {receipts.map((receipt) => (
            <TableRow key={receipt.id}>
              <TableCell className="font-medium">{receipt.id}</TableCell>
              <TableCell>{receipt.customerName}</TableCell>
              <TableCell className="text-left">{receipt.amount.toFixed(2)}</TableCell>
              <TableCell>{receipt.status}</TableCell>
              <TableCell className="text-left">{receipt.date}</TableCell>
              <TableCell>
                {/* Edit and Delete buttons */}
                <Button
                  className="mr-2"
                  variant="outline"
                  onClick={() => openEditModal(receipt)}
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(receipt.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Receipt Button */}
      <Button className="mt-4" onClick={() => setIsModalOpen(true)}>
        Add Receipt
      </Button>

      {/* Modal for Add/Edit Receipt */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <ReceiptForm
            receipt={editReceipt}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface ReceiptFormProps {
  receipt: Receipt | null;
  onSave: (receipt: Receipt) => void;
  onClose: () => void;
}

const ReceiptForm: React.FC<ReceiptFormProps> = ({ receipt, onSave, onClose }) => {
  const [formData, setFormData] = useState<Receipt>(
    receipt || {
      id: "",
      customerName: "",
      amount: 0,
      status: "",
      date: "",
    }
  );

  // Form submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.id) {
      alert("Please provide an invoice ID.");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          placeholder="Invoice ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
        <Input
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={(e) =>
            setFormData({ ...formData, customerName: e.target.value })
          }
        />
        <Input
          placeholder="Amount"
          type="number"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: parseFloat(e.target.value) })
          }
        />
        <Input
          placeholder="Status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <Input
          placeholder="Date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      <Button type="submit" className="mt-4">
        Save
      </Button>
    </form>
  );
};

export default Page; // Ensure the component is exported as 'Page'
