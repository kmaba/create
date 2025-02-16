import React from 'react';
import { motion } from 'framer-motion';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { classNames } from '~/utils/classNames';

const ServiceStatusTab = () => {
  return (
    <div className="space-y-6">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 mt-8 mb-4">
          <div
            className={classNames(
              'w-8 h-8 flex items-center justify-center rounded-lg',
              'bg-bolt-elements-background-depth-3',
              'text-teal-500',
            )}
          >
            <TbActivityHeartbeat className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-md font-medium text-bolt-elements-textPrimary">Service Status</h4>
            <p className="text-sm text-bolt-elements-textSecondary">
              A placeholder for service status monitoring
            </p>
          </div>
        </div>
        {/* Removed all API calls and provider references */}
      </motion.div>
    </div>
  );
};

ServiceStatusTab.tabMetadata = {
  icon: 'i-ph:activity-bold',
  description: 'A placeholder for service status',
  category: 'services',
};

export default ServiceStatusTab;
