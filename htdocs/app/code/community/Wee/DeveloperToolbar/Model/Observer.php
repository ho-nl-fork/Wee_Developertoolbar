<?php

class Wee_DeveloperToolbar_Model_Observer
{
    public function removeCoreProfilerBlock($observer)
    {
        if (Mage::helper('core')->isModuleEnabled('Aoe_Profiler')) {
            Mage::app()->getLayout()->removeOutputBlock('core_profiler');
        }
    }
}
