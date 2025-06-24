import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Trash2, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    try {
      const savedBookings = JSON.parse(localStorage.getItem('swimBookings') || '[]');
      setBookings(savedBookings);
    } catch (error) {
      console.error("Failed to parse bookings from localStorage:", error);
      setBookings([]);
    }
  }, []);

  const updateBookingStatus = (id, status) => {
    const updatedBookings = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updatedBookings);
    localStorage.setItem('swimBookings', JSON.stringify(updatedBookings));
    toast({
      title: "Status Updated",
      description: `Booking status changed to ${status}.`,
    });
  };

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('swimBookings', JSON.stringify(updatedBookings));
    toast({
      title: "Booking Deleted",
      description: "The booking has been removed successfully.",
    });
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'Pending': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Bookings | Swim Steps Admin</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bookings</h1>
        <p className="text-muted-foreground mt-1">View and manage all trial bookings.</p>
      </motion.div>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead><span className="sr-only">Actions</span></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.name} (Age: {booking.age})</TableCell>
                    <TableCell>{booking.contact}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(booking.status)}>{booking.status}</Badge>
                    </TableCell>
                    <TableCell>{new Date(booking.submittedAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => updateBookingStatus(booking.id, 'Completed')}>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateBookingStatus(booking.id, 'Pending')}>
                            <Clock className="mr-2 h-4 w-4" />
                            Mark as Pending
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(booking.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="5" className="h-24 text-center">
                    No bookings found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </>
  );
};

export default BookingsPage;