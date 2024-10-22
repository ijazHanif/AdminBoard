import { Receipt } from "@/types/Type";

export const receiptData: Receipt[] = [
    {
      id: '001',
      customerName: 'John Doe',
      date: '2024-10-01',
      amount: 2000,
      status: 'Paid',
    },
    {
      id: '002',
      customerName: 'Jane Smith',
      date: '2024-10-02',
      amount: 15000,
      status: 'Pending',
    },
    {
      id: '003',
      customerName: 'Alice Johnson',
      date: '2024-10-03',
      amount: 8000,
      status: 'Failed',
    },
    {
        id: '004',
        customerName: 'Alice Smith',
        date: '2023-12-20',
        amount: 5000,
        status: 'Paid',
      },
      {
        id: '005',
        customerName: 'Alice Johnson',
        date: '2024-10-03',
        amount: 8000,
        status: 'Failed',
      },
  ];
  