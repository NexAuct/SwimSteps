import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Calendar, MapPin, Clock, Mail, Trash2, Users, BellRing, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminPage = () => {
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

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(booking => booking.id !== id);
    setBookings(updatedBookings);
    localStorage.setItem('swimBookings', JSON.stringify(updatedBookings));
    toast({
      title: "Booking Deleted",
      description: "The booking has been removed successfully.",
    });
  };
  
  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(b => b.status === 'Pending').length;

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Swim Steps Bookings</title>
        <meta name="description" content="View and manage all swimming class trial bookings." />
      </Helmet>
      <div className="py-20 md:py-24 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Manage all trial and consultation bookings for Swim Steps.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalBookings}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                <BellRing className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingBookings}</div>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Trials</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">Feature coming soon</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {bookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bookings.map((booking) => (
                  <motion.div key={booking.id} whileHover={{ y: -5 }}>
                    <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="truncate">{booking.name}</span>
                           <Button variant="ghost" size="icon" onClick={() => handleDelete(booking.id)} className="text-destructive/70 hover:text-destructive hover:bg-destructive/10 flex-shrink-0">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </CardTitle>
                        <CardDescription>
                          Submitted: {new Date(booking.submittedAt).toLocaleDateString()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-3">
                        <p className="flex items-center text-sm"><User className="mr-2 h-4 w-4 text-primary/80" /> Age: {booking.age}</p>
                        <p className="flex items-center text-sm truncate"><Mail className="mr-2 h-4 w-4 text-primary/80" /> {booking.contact}</p>
                        <p className="flex items-center text-sm"><MapPin className="mr-2 h-4 w-4 text-primary/80" /> {booking.location || 'N/A'}</p>
                        <p className="flex items-center text-sm"><Clock className="mr-2 h-4 w-4 text-primary/80" /> {booking.time || 'N/A'}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center py-16"
              >
                <Card className="max-w-md mx-auto p-8 bg-white">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">No bookings yet</h3>
                  <p className="mt-2 text-gray-500">New trial bookings will appear here once they are submitted.</p>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;